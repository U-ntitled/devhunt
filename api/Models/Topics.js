const mongoose = require("mongoose")

const TopicSchema = mongoose.Schema({
    name: {type:String, require:true},
},
{
    timestamp: true
}
)

module.exports = mongoose.model("topic",TopicSchema)