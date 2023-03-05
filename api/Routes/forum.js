const route = require('express').Router()
const uPost = require('../Models/UserPost')
const topic = require('../Models/Topics')
const UserPost = require('../Models/UserPost')
const User = require('../Models/Users')


route.get('/recently', async (req, res)=>{
    try{
        uPost.find({}).populate("comments")
        .sort({created_at: -1})
        .select("description state topic type comments owner num_commet created_at")
        .then((result)=>{
            res
            .status(200)
            .json(result)
        })
    }
    catch(e){
        console.error(e)
        res
        .status(401)
        .end()
    }
})


route.get('/resolu', async (req, res)=>{
    try{
uPost.find({$or:[{state: "true"}, {challenge_state: "true"}]})
        .populate("comments")
        .select("description state topic type comments owner num_commet created_at")
        .then((result)=>{
            res
            .status(200)
            .json(result)
        })
    }
    catch(e){
        console.error(e)
        res
        .status(401)
        .end()
    }
    
})


route.get('/mesquestions', async (req, res)=>{
    try{
        uPost.find({id: req.cookies.user_id})
        .populate("comments")
        .select("descripttion images state topic challenge_state num_recommendation type comments num_comment")
        .then((result)=>{
            res
            .status(200)
            .json(result)
        })
    }
    catch{
        console.error(e)
        res
        .status(401)
        .end()
    }
})


route.get("/participations", async (req, res)=>{
    try{
        uPost
        .find({id: "6403cb05c7dbcce32172393a"})
        .populate("owner")
        .select("id owner")
        .exec()
        .then((result)=>{
            res.json(result)
        })
    }
    catch(e){
        console.error(e)
        res
        .status(401)
        .end()
    }
})



module.exports = route