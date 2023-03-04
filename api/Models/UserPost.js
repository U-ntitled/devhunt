const mongoose = require("mongoose")

const UserPostSchema = mongoose.Schema({
    owner_id: {type:String,require:true},
    description: {type:String,require:true},
    images: {type:Array,require:false},
    state: {type:String,require:true,default:false}, //SOLVED OR NOT SIMPLE POST
    topic: {type:String,require:true},
    challenge_state: {type:Boolean, default:false}, //Challenge resolved or not
    delay: {type:Date,require:false},
    num_comment: {type:Number,require:true,default:0},
    user_mentionned: {type:Array,require:false},
    type: {type:String, require:true}, //POST,SHARE,EVENT,CHALLLENGE
    entity : {type:String, require:false,default:"user"}
},
{
    timestamp : true
}
)

module.exports = mongoose.model("userpost", UserPostSchema);
