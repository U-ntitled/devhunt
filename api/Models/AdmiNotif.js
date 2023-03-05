const mongoose = require("mongoose")

const AdmiNotifSchema = mongoose.Schema({
    signal_id: {type:String, require:false}, 
    lname : {type:String, require:true},
    fname:{type:String, require:true}   
},
{
    timestamp : true
}
)

module.exports = mongoose.model("adminotif", AdmiNotifSchema);
