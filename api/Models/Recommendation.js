const mongoose = require("mongoose")

const RecommandationSchema = mongoose.Schema({
    user_id: {type:String, require:true},
    post_id: {type:String, require:true},
    action: {type:String, default:"false"}
},
{
    timestamp : true
}
)

module.exports = mongoose.model("recommandation", RecommandationSchema);
