const mongoose = require("mongoose")

const AdmiNotifSchema = mongoose.Schema({
    signal_id: {type:String, require:false},    
},
{
    timestamp : true
}
)

module.exports = mongoose.model("adminotif", AdmiNotifSchema);
