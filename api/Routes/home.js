const route = require('express').Router(); 
const coms = require("../Models/Comment")
const User = require('../Models/Users')
const uPost = require('../Models/UserPost');
const Topic = require("../Models/Topics")


// SENDING POST
route.get('/', async (req, res)=>{
    try{
        // Getting all post first 
        Topic.find({}).then((topics) => {

            // Getting data
            uPost.find({})
            .sort({created_at : -1})
            .limit(10)
            .then((posts) => {

                data = {
                    post : posts,
                    topic : topics
                }

                res.status(200)
                .json(data).end()
            })
        })
    }
    catch(e){
        console.log(e)
        res.status(404)
        .end()
    }
})

//SENDING SPECIFIC POST


route.get('/post/:topic', async (req, res)=>{
    try{
        const topic = req.params.topic
        uPost.find({topic: topic})
        .limit(10)
        .then((result)=>{
            res
            .status(200)
            .json(result)
        })
    }
    catch(e){
        res
        .status(404)
        .end()
    }

})

// Adding post
route.post("/create-post", async (request, response) => {
    const {owner,description,images,state,topic,challenge_state,delay,num_comment,type} = request.body
    try {
        const Upost = new uPost({
            owner,
            description,
            images,
            state,
            topic,
            challenge_state,
            delay,
            num_comment,
            type
        })

        Upost.save()
        response.cookie("post_id",Upost.id)
        .status(200).end()

    }catch(e) {
        console.log(e)
        response.status(400)
        .json({data: "Error while creating form. Better check your connection."})
    }
})


// Setting new comment in a post
route.post("/create-comment",async (req, res) => {
    const { post_id, text } = req.body
    try{
        const Comment = new coms({
            post :req.cookies.post_id,
            coms_user_id: req.cookies.user_id,
            text: req.body.text, 
        })
    
        Comment.save()
    
        uPost.findOne({topic : "topic"}).then((poste) => {
            poste.comments.push(Comment.id)
            poste.save()
        })
        res.status(200).end()
    }
    catch(e){
        console.log(e)
        response
        .status(404)
        .end({error: "Vous svez enter de mauvaises donnees"})
    }
})


// Getting a specific post
route.get("/show-post",(req,res) => {

    // Getting Post Data 
    try {
        uPost
        .findOne({id : req.body.post_id})
        .then((post) => {
    
            // Extract user from the post data
            User.findOne({id: post.owner[0]})
            .select("fname lname profilePicture")
            .then((user) => {
                var data = {
                    post : poste,
                    user: user
                }
                res.status(200).json(data)
            })
    
        })
    }catch(e) {
        console.log(e)
        response.status(400)
        .json({result:"Error while getting data, Please verify your connection"}).end()
    }
})


module.exports = route
