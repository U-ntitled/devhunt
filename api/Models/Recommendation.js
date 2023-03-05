const mongoose = require("mongoose")

const RecommandationSchema = mongoose.Schema({
    user_id: {type:String, require:true},
    post_id: {type:String, require:false},
    aim_id: {type: String, require : false},
    action: {type:Number, default:0},
    last: {type:Number, default: 0}
},
{
    timestamp : true
}
)

module.exports = mongoose.model("recommandation", RecommandationSchema);
