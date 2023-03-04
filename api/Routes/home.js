const route = require('express').Router(); 
const User = require('../Models/Users')
const uPost = require('../Models/UserPost');


// Envoie des Postes
route.post('/', async (req, res)=>{
    try{

        // const {lname, fname, email, pass, matricule, niv} = {}

        const newUser = new User({
            lname: "Nino",
            fname:"kely",
            email: "nino@gmail.com",
            matricule: "enao",
            password: "passwordHash",
            niveau: "L1",
        })
        newUser.save()

        User.findOne({})
        .then((found)=>{
            if(found){
                res
                .status(200)
                .json(found)
                .end()
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
