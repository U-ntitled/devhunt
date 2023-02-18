const route = require('express').Router(); 
const User = require('../Models/Users')
const uPost = require('../Models/UserPost');


route.get('api/home', async (req, res)=>{
    try{
        const query = uPost.find().sort({created_at: -1})
        query.exec((err, result)=>{
            if(err) throw err
            res.status(200)
            res.send(result)
    })
    }
    catch(e){
        res.status(404)
        .end()
    }
})

route.get()


module.exports = route



