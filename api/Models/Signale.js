const mongoose = require("mongoose")

const SignalSchema = mongoose.Schema({
    sender_id: {type:String, require:true},
    user_id: {type: String, require:true},
    signale: {type:Boolean, require:true, default:true}   
},
{
    timestamp: true
}
)

module.exports = mongoose.model("signale",SignalSchema)