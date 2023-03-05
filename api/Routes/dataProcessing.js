const route = require("express").Router()

// including models
const Notif = require("../Models/Notification")
const User = require("../Models/Users")
const Recommend = require("../Models/Recommendation")
const Post = require("../Models/UserPost")


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
        // Verify if the recommenation is already set
        Recommend.findOne({ $and : [{user_id: request.cookies.user_id}, {post_id: request.body.post_id}]})
        .then((result) => {
            if (result.length > 0) {
                result.action = request.body.action
                
                let latest = request.body.action
                // Get the post and add the difference
                let post = Post.findOne({id: request.body.post_id})
                
                post.num_recommendation += (result.action - result.action.last)

                result.last = latest
                result.save()
                post.save()

                response.status(201)
                .json({
                    data: "Recommendation set properly"
                })

                // If not set we, proceed to the creation
            } else {
                try {
                    console.log("Setting new post")
                    let recom = new Recommend({
                        user_id: request.cookies.user_id,
                        post_id: request.body.post_id,
                        action: request.action
                    })
                    recom.save()
                    Post.findOne({id: post_id}).then((post) => {
                        post.num_recommendation += recom.action
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
        let post =  await Post.findOne({$and : [{id:request.body.post_id}, {owner: request.cookies.user_id}]}).exec()
        post.state = "true"
        post.save()
        response.status(200).json(post)

    } catch(e) {
        console.log(e)
        response.status(404).json({data: "Something went wrong, please check your network connection."})
    }
})


// Update User
route.put("/user/update", (request,response) => {
    const {email, password, profilePidcture } = request.body
    const data = request.body
    try {
        User.findOne({id: request.cookies.user_id}).then((user) => {
            user.email = data.email
            user.password = data.password
            user.profilePicture = data.profilePicture

            user.save()
            response.status(200).json({stat: "User update successfully !"})
        })
        
    } catch(e) {
        console.log(e)
        response.status(404)
        .json({data: "Error while performing the action"})
    }
})

/* -------------ADMIN ACTION------------- */

// Setting restriction by admin
route.put("/admin/restriction", async(request, response) => {
    try {
        let user = await User.findOneAndUpdate({ id: request.body.user_id }, { restriction: true }, { new: true })
        response.status(200).json({ data: "Restriction set successfully" })
    } catch (e) {
        console.log(e)
        response.status(400)
            .json({ data: "Error while restricting user" })
    }
})


// 

module.exports = route