const route = require('express').Router(); 
const coms = require("../Models/Comment")
const User = require('../Models/Users')
const uPost = require('../Models/UserPost');
const Topic = require("../Models/Topics")


// API test
route.get("/test", (req, res) => {
    User.find().sort({created_at : -1})
    .then((result) => {
        res.status(200).json(result)
    })
})


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
            poste.num_comment += 1
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


//Les plus visites de post
route.get('/visiter/post', async (req, res)=>{
   try{
       uPost.find({})
       .sort({num_comment: -1})
       .limit(3)
    //    .select("")
       .then((result)=> {
            res.json(result)
        })
   }
   catch(e){
        res.status(401).end()
   }
})

//Extraction des profils les plus visites
route.get('/visiter/profil', async (req, res)=>{
    try{
            uPost.find({})
            .sort({num_comment: -1})
            .limit(3)
            .then((result)=> {
                User.find({}).
                where({id: result.owner})
                .select("fname lname profilePicture")
                .then((response) => {
                    var data = {

                        user: response
                    }
                    res.json(data)
                })
            })
    }
    
    catch(e){
         res.status(401).end()
    }
})

//MIS A JOUR DE NOUVEAU POSTE

route.put('/post-update/', async (req, res)=>{
    try{
        const {owner,description,images,state,topic,challenge_state,delay,num_comment,type} = req.body
        let npost = await uPost.findOneAndUpdate({ id: req.body.post_id },
         { owner: owner, description: description ,images: images, state: state, topic: topic, challenge_state: challenge_state, delay: delay, num_comment:num_comment, type : type}
         , {new:true})
        res

        .status(200)
        .json(npost)
        .end()
    }
    catch(e){
        console.log(e)
        res.status(404).end()
    }
    
})


route.delete('/delete/:id', async (req, res) =>{
    try{
        uPost.findByIdAndRemove(req.params.id)
        res
        .status(204)
        .end()
    }
    catch(e){
        res.status(401)
        .end()
    }
})


// Insertion test
route.post('/untitled_data', async (req, res) => {
    const { lname, fname, email, matricule, niveau} = req.body
    const newUser = new User({
        lname, fname, email, matricule, niveau
    })
    newUser.save()
    res.status(201).json({result : "Data created"})
})


module.exports = route
