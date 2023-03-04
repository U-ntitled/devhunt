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

<<<<<<< HEAD

module.exports = route
=======
route.get()


module.exports = route



>>>>>>> 9448320cea27c52f9d14faf83f4f7c2053fe06cf
