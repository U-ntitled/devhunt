const route = require('express').Router(); 
const User = require('../Models/Users')
const uPost = require('../Models/UserPost');


// Envoie des Postes
route.get('/', async (req, res)=>{
    try{
        uPost.find({created_at: -1})
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

<<<<<<< HEAD
// route.get('/image', async (res, req)=>{
//     try{
//         const query = 
//     }
//     catch(e){
//         res
//         .status(404)
//         .ens()
//     }
// })
=======
<<<<<<< HEAD

module.exports = route
=======
route.get()
>>>>>>> 037856dd298a5cd14ae3c47e4fc46d46033cb3fa


module.exports = route



>>>>>>> 9448320cea27c52f9d14faf83f4f7c2053fe06cf
