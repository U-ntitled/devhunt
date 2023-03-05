const route = require("express").Router()
// All model
const User = require("../Models/Users")
const uPost = require("../Models/UserPost")

/* 
1) User data()
User statistic
2) nbr_post
3) nbr_challenge participé

*/

// User Data Api 
route.get("/", (req, res) => {
    try {
        User.findById(req.cookies.user_id)
        .then((user) => {
            res.status(200)
            .json(user)
        })
    }catch(e) {
        res.status(404)
        .json({status : "Error while connecting to the server"})
    }
})


// Getting statistical data from user profile
route.get("/activite/count",(req,res) => {
    try {
        var uid = req.cookies.user_id
    }catch(e){
        var uid = ""
        res.status(404).json(e)
    }

    try{
        uPost.count({owner: uid})
        .then((nbr_post)=>{

        })
    }catch(e) {
        res.status(400).json(e)
    }
})




module.exports = route