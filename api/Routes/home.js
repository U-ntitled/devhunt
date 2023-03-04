const route = require('express').Router(); 
const User = require('../Models/Users')
const uPost = require('../Models/UserPost');


// Envoie des Postes
route.get('/', async (req, res)=>{
    try{
        uPost.find({}).limit(10)
        .then((found)=>{
            if(found){
                res
                .status(200)
                .json(found)
            }
            else{
                
                res
                .status(404)
                .end()
            }
        })
    }
    catch(e){
        console.log(e)
        res.status(404)
        .end()
    }
})



module.exports = route
