const route = require("express").Router()

// including models
const Notif = require("../Models/Notification")
const User = require("../Models/Users")
const Recommend = require("../Models/Recommendation")
const Post = require("../Models/UserPost")
const Topics = require("../Models/Topics")
const Signale = require("../Models/Signale")
const Adminotif = require("../Models/AdmiNotif")


// Usual process
route.post("/notification", (request, response) => {
    // getting notification data
    const { owner_id, performer_id, post_id, comment_id, notif_type, seen } = request.body
    try {
        let notif = new Notif({
            owner_id,
            performer_id,
            post_id,
            comment_id,
            notif_type,
            seen
        })

        notif.save()
        response.status(201).json({ data: "Notification send !" })
    } catch (e) {
        console.log(e)
        response.status(400).json({
            data: "Error while sending notification !"
        })
    }
})


/*  -------------USER ACTION---------- */

// Recommendation api for post
route.post("/recommendation",async (request, response) => {
    try {
        // Verify if the recommendation is already set
        Recommend.findOne({ $and : [{user_id: request.cookies.user_id}, {post_id: request.body.post_id}]})
        .then((result) => {
            console.log(result)
            if (result != null ) {

                let latest = result.action
                result.action = request.body.action
                result.last = latest
                
                // Get the post and add the difference
                Post.findOne({id: request.body.post_id}).then((post) => {
                    // let val = result.action + result.action.last
                    post.num_recommendation += (result.action - result.last)
    
                    result.save()
                    post.save()
    
                    response.status(201)
                    .json({
                        data: "Recommendation set properly"
                    })
                    // post : post,
                    // result: result
                
                })

                // If not set we, proceed to the creation
            } else {
                try {
                    console.log("Setting new post")
                    // Create a recommendation
                    let recom = new Recommend({
                        user_id: request.cookies.user_id,
                        post_id: request.body.post_id,
                        action: request.body.action
                    })
                    recom.save()
                    // Adding the number of recommendation
                    Post.findOne({id: recom.post_id}).then((post) => {
                        post.num_recommendation += request.body.action
                        post.save()
                        response.status(201).json({data: "Recommendation set"})
                    })
                } catch(e) {
                    console.log(e)
                    response.status(404).end()
                    throw e
                }

            }
        })

    } catch(e) {
        console.error(e)
        response.status(400)
        .json({
            data: "Error while sending recommendation, Verify your network :("
        }) 
    }
})


// Update solved post
route.put("/user/solve", async (request,response) => {
    try {
        let post =  await Post.findOne({$and : [{id:request.body.post_id}, {owner: request.body.user_id}]}).exec()
        post.state = "true"
        post.save()
        response.status(200).json(post)

    } catch(e) {
        console.log(e)
        response.status(404).json({data: "Something went wrong, please check your network connection."})
    }
})


// Update User
route.put("/user/update",async (request,response) => {
    try {
        const token = request.cookies.user_id
        if(!token) {
            return response.json({connected:false})
        }
        const verifyCodeWithSecret = jwt.verify(token, process.env.JWT_SECRET)
            if(verifyCodeWithSecret){
                const base64Url = token.split('.')[1]
                const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
                const buff =  Buffer.from(base64,'base64')
                const payloadinit = buff.toString('ascii')
                const payload = JSON.parse(payloadinit)
                const user = await User.findOne({id: payload.user})
                const data = request.body
                let profilePicture = ""
                if(request.file.path === undefined) {
                    profilePicture = user.profilePicture
                } else {
                    profilePicture = request.file.path
                }
            
                const email = data.email ? data.email : user.email
                const password = data.password ? data.password : user.password

                const newData = {
                    email: email,
                    password: password,
                    profilePicture: profilePicture
                }

                const newPost = {
                    profile : profilePicture
                }

                const updateUser = await User.updateOne({id: user.user}, {$set: newData})
                const updatePost = await Post.updateMany({user_id: user.user},{$set: newPost})
                response.send()
            }

    } catch(e) {
        console.log(e)
        response.status(404)
        .json({data: "Error while performing the action"})
    }
})


// Sending signal to user about bad content
route.post("/user/signal", (request,response) => {
    try {
        Signale.findOne({$and : [{sender_id: request.body.sender_id},{user_id: request.cookies.user_id}]})
        .then((signale) => {
            if(signale === null) {
                let sign = new Signale({
                    sender_id: request.body.sender_id,
                    user_id: request.cookies.user_id
                })

                sign.save()
                
                let notif = new Notif({
                    owner_id: sign.user_id,
                    notif_type: "Signale"
                })

                notif.save()
                
                User.findOne({id: request.cookies.user_id}).then((user) => {
                    user.nbr_signal += 1
                    user.save()
                    response.status(201).json({result: "Signale send successfully"})
                })
                
            } else {
                if(signale.signale) {
                    signale.signale = false
                    User.findOne({id: request.cookies.user_id}).then((user) => {
                        user.nbr_signal -= 1
                        user.save()                
                    })
                
                } else {
                    signale.signale = true
                    User.findOne({id: request.cookies.user_id}).then((user) => {
                        user.nbr_signal += 1
                        if (user.nbr_signal > 5) {
                            let admi = new Adminotif({
                                signal_id : user.id,
                                lname:user.lname,
                                fname:user.fname
                            })
                        }
                        user.save()
                    })
                }
            
                signale.save()
                response.status(200).json({result: "Signale update"})
            }
        })
    
    } catch(e) {
        console.log(e)
        response.status(404).json({result: "Error while updating signale on user"})
    }
})


/* -------------ADMIN ACTION------------- */

// Setting restriction by admin
route.put("/admin/restriction", async(request, response) => {
    try {
        // let user = await User.findOneAndUpdate({ id: request.body.user_id }, { restriction: true }, { new: true })
        let user = await User.findOne({id: request.body.user_id})        
        console.log(user.restriction)
        if (user.restriction) {
            user.restriction = false
        }else {
            user.restriction = true
        }
        user.save()
        response.status(200).json({ data: "Restriction set successfully", user: user })
    } catch (e) {
        console.log(e)
        response.status(400)
            .json({ data: "Error while restricting user" })
    }
})


// Adding new topic
route.post("/admin/add-topic", (request,response) => {
    let topic = new Topics({
        name: request.body.topic
    })
    topic.save()
    response.status(201).json({data: "Topic added"})
})



module.exports = route
