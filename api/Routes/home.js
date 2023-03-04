const route = require('express').Router(); 
const User = require('../Models/Users')
const uPost = require('../Models/UserPost');


// Envoie des Postes
route.get('/', async (req, res)=>{
    try{


        //Recuperation des postes utilisateurs par date de creation
        uPost.find({created_at: -1})
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
