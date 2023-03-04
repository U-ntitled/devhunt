const mongoose = require("mongoose")

const ClubSchema = mongoose.Schema({
    owner: {type:String,require:false},
    nom: {type:String,require:true},
    description: {type:String, require:true,default: ""},
    profileimage: {type:String,require:true},
},
{
    timestamp : true
}
)

module.exports = mongoose.model("club", ClubSchema);
