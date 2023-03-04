const mongoose = require("mongoose")

const UserPostSchema = mongoose.Schema({
    owner : {id:mongoose.Schema.objectID, ref: "users"},
    description: {type:String,require:true},
    images: {type:Array,require:false},
    state: {type:String,require:true,default:false}, //SOLVED OR NOT
    delay: {type:Date,require:false},
    num_comment: {type:Number,require:true,default:0},
    user_mentionned: {type:Array,require:false},
    type: {type:String, require:true,default:"Post"}, //POST,SHARE,EVENT,CHALLLENGE
},
{
    timestamp : true
}
)

module.exports = mongoose.model("userPost", UserPostSchema);