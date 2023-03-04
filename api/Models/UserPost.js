const mongoose = require("mongoose")

const UserPostSchema = mongoose.Schema({
    owner: [{type: mongoose.Schema.Types.ObjectId, ref: "user"}],
    description: {type:String,require:true},
    images: {type:Array,require:false},
    state: {type:String,require:true,default:false}, //SOLVED OR NOT SIMPLE POST
    topic: {type:String,require:true},
    challenge_state: {type:Boolean, default:false}, //Challenge resolved or not
    delay: {type:Date,require:false},
    created_at : {type:Date, require:true, default:Date.now},
    num_comment: {type:Number,require:true,default:0},
    user_mentionned: {type:Array,require:false},
    type: {type:String, require:true}, //POST,SHARE,EVENT,CHALLLENGE
    comments : [{type: mongoose.Schema.Types.ObjectId, ref: "comment"}]
},
{
    timestamp : true
}
)

module.exports = mongoose.model("userpost", UserPostSchema);
