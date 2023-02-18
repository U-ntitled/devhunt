const mongoose = require("mongoose")

const CommentSchema = mongoose.Schema({
    post_id: {type:String,require:true},
    coms_user_id: {type:String,require:true},
    voting: {type:Number,require:false,default:0},
    text: {type:String,require:true},
    reponse: [Object],
},
{
    timestamp : true
}
)

module.exports = mongoose.model("comment", CommentSchema);
