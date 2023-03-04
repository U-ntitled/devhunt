const route = require('express').Router(); 
const bcrypt = require('bcryptjs');
const User = require('../Models/Users')
const nodemailer = require('nodemailer')
// const twofactor = require('node-2fa') 
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken')
const speackeasy = require('speakeasy')
const Code = require('../Models/Code'); 


dotenv.config()
route.post('/register',async(req,res)=>{
    try{
        const {lname,fname,identifiant,birth,password,gender} = req.body
        console.log(lname,fname,identifiant,birth,password,gender)
        if(!lname || !fname || !identifiant || !birth  || !password || !gender){
             return res
            .status(400)
            .json({ErroMessage:'Please enter the required information'})
        }

        if(password.length < 8){
             return res
            .status(400)
            .json({ErroMessage:'Please enter more than 8 characters'})
        }

        const existingUser = await User.findOne({identifiant})
        if(existingUser)
            return res
            .status(401)
            .json({ErroMessage: 'An account with that email or phone number already exists'})
        
        else{
        const verificationCode = speackeasy.totp({
            secret: process.env.PASSWORD_MY,
            encoding: 'base32'
        })
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth:{
                user: process.env.EMAIL_MY,
                pass: process.env.PASSWORD_MY
            }
        })
        const mailOptions = {
            from: 'fanomezantsoanomenandrianiaina@gmail.com',
            to: `${identifiant}`,
            subject:"Email Confirmation",
            text: `Hey ${fname} your code is ${verificationCode}`
        }
        transporter.sendMail(mailOptions,function(err,info){
            if(err){
                console.error(err)
                return true
            }else{
                console.log('Email sent: ' + info.response)
                throw new Error(`Impossile d' envoyer l' email a ${email}`)
            }
        })
        const salt =  await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password,salt)
        const typeofIdentifiant = isNaN(parseInt(identifiant)) ? 'email' : 'number';
        const newUser = new User({
            id: 'test',
            lname,
            birth:birth,
            identifiant,
            typeofIdentifiant,
            password: passwordHash,
        })
        const newCode = new Code({
            id: newUser._id,
            codetfa: verificationCode

        })
        newCode.save()
        const user = newUser.save()
        const token = jwt.sign({
            user: user._id
        },process.env.JWT_SECRET)
        res
            .cookie("tokenNonV",token,{
                expires: new Date(Date.now() +  259200),
                httpOnly: true,
            }) 
            .json({registerMessage:'authentification successful'})
            .send()
           }
    }catch(e){
        console.error(e)
    }
})

route.post('/codeVerification',async(req,res)=>{
    try{
        const {codetfa} = req.body
        const token = req.cookies.tokenNonV
        if(!token){
            return res
            .status(401)
            .json({ErroMessage:"veillez vous connecter"})
        }
        const verifyCodeWithSecret = jwt.verify(token, process.env.JWT_SECRET)
        if(verifyCodeWithSecret){
            const base64Url = token.split('.')[1]
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
            const buff =  Buffer.from(base64,'base64')
            const payloadinit = buff.toString('ascii')
            const payload = JSON.parse(payloadinit)
            const code  = await Code.findOne({id: payload.user})
            if(codetfa === code.codetfa){
                const token =   jwt.sign({
                    user: code._id
                },process.env.JWT_SECRET)
                res
                .cookie("SeraoToken",token,{
                    expires: new Date(Date.now() +  259200000),
                    httpOnly: true,
                })
                   .json({SuccessMessage: "Correct Code"})
                   .send()
            }
            else{
                res
                .json({ErroMessage:"Code Incorrecte"})
                .status(401)
            }
        }else{
            res
            .json({ErroMessage: "Votre token est invalide"})
            .status(401)
        }

    }catch(e){
        console.err(e)
        res
        .status(500)
        .json({ErrorMessage: "Server error"})
    }
})

route.get('/',async(req,res)=>{
    const token = req.cookies.SeraoToken
    console.log(token)
    try{
        if(!token){
            res
            .status(401)
            .json({connection:false})
        }else{
            res
            .status(200)
            .json({connection:true})
        }
    }catch(e){
        console.error(e)
    }
})

//Login api
route.post('/login', async(req,res)=>{
    try{
        const {identifiant,password}= req.body
        if(!identifiant || !password){
            return res
            .status(400)
            .json({ErroMessage: 'Please Enter the required fields'})
        }
        const user = await User.findOne({identifiant})
        if(!user){
            return res
            .status(401)
            .json({ErroMessage: 'wrong email or phone number'})
        }
        const correctPassword = await bcrypt.compare(password,user.password )
        if(!correctPassword){
            return res
            .status(401)
            .json({ErroMessage: 'wrong  Password'})
        }
        const token = jwt.sign({
            user: user._id
        },process.env.JWT_SECRET)
        res
            .cookie("SeraoToken",token,{
                expires: new Date(Date.now() +  259200000),
                httpOnly: true,
            })
            .send();
         
    }catch(e){
        console.error(e)
        res
        .status(500)
        .json({ErroMessage: 'Erreur au niveau du back'})
    }
})

//Suppression du code de verification
route.delete('/deleteCode',async(req,res)=>{
    try{
        const verificationToken= req.cookies.SeraoToken
        const verified = jwt.verify(verificationToken, process.env.JWT_SECRET)
        console.log(verified)
        if(!verificationToken){
            return res
                 .json({'error Message': 'Unauthorized'})
                 .status(401)
        }
        else{
            const base64Url = verificationToken.split('.')[1]
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
            const buff =  Buffer.from(base64,'base64')
            const payloadinit = buff.toString('ascii')
            const payload = JSON.parse(payloadinit)
            console.log('payload:',payload.user)
            const result = await Code.deleteMany({id: payload.user})
            if(result.deletedCount === 1){
                console.log('Successfully deleted')
            }else{
                console.log('Delete Error')
            }
            res
                .json({'sucsses message':'Suppression avec sucsses'})
        }


    }catch(err){
        console.error(err)
        res
            .send(401)
    }
})


//Mettre a jour le champ de verificatiion dans le modele de l' ustisateur
route.put('/updateCode',async(req,res)=>{
    try{
        const verificationToken= req.cookies.SeraoToken
        const verified = jwt.verify(verificationToken, process.env.JWT_SECRET)
        console.log(verified)
        if(!verificationToken){
            return res
                 .json({'error Message': 'Unauthorized'})
                 .status(401)
        }else{
            const base64Url = verificationToken.split('.')[1]
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
            const buff =  Buffer.from(base64,'base64')
            const payloadinit = buff.toString('ascii')
            const payload = JSON.parse(payloadinit)
            console.log('payload:',payload.user)
            const newData = {
                verify: true
            }
            const condition = {_id: payload.user}
            const updatingUser = await User.updateOne(condition,{
                $set: newData
            })
            console.log(updatingUser)
            res.send()
        }
    }catch(err){
        console.error(err)
        res.send(500)
    }
})


module.exports = route