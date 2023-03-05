const express = require('express');
const app = express();
const http = require('http')
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const multer = require('multer')
const profile = multer({dest:'profile/'})
const cors= require('cors')
const cookieParser  = require('cookie-parser')

// Subroutes 
const authRouter = require('./Routes/auth')
const homePost = require('./Routes/home')
const profileRouter = require("./Routes/profile")
const forum = require('./Routes/forum')
const actionProcessing = require("./Routes/dataProcessing")


dotenv.config()
//mongodb connection
mongoose.set('strictQuery', true)
main()
.then(()=>{console.log('DB connection established')})
.catch(err=>console.error(err))

//Pour parser les cookies
app.use(cookieParser())

//Pour donner l' authorization au frontEnd
app.use(cors({
    origin:['http://localhost:3000'],
    credentials: true
}))

//socket connnection
io.on('connect', (socket)=>{
    console.log('a user connected')
})

//pour utiliser des json
app.use(express.json())

//utilisation du route auth dans Routes
app.use('/api/Routes/auth/',profile.single('profilePicture'),authRouter);

//Utilisation du route home dans Routes
app.use('/api/Routes/home/', homePost);

/* Utilisation de route profile dans Routes 
Mise en place des api */
app.use("/api/Routes/profile/", profileRouter)

/* Gestion des actions non rendu dans l'ui */
app.use("/api/Routes/action/",actionProcessing)

//gestions des sctions dans la partie FORUM
app.use('/api/Routes/forum/', forum)

//fonction de connection mongodb
async function main(){
    await mongoose.connect(process.env.MONGO_URL);
}

//demarage du serveur
server.listen(8000,()=>{
    console.log('listening at *3000');
})