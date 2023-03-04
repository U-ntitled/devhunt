const mongoose = require("mongoose")

const NotificationSchema = mongoose.Schema({
<<<<<<< HEAD
    owner_id: {type:String, require:false},
    club_id: {type:String, require:false},
    performer_id: {type:String, require:false},
    // About post 
    post_id: {type:String, require:false},
    club_post_id: {type:String, require:false},
    // Interaction
    comment_id: {type:String,require:false},
=======
    owner_id: {type:Number, require:false},
    club_id: {type:Number, require:false},
    performer_id: {type:Number, require:false},
    // About post 
    post_id: {type:number, require:false},
    club_post_id: {type:number, require:false},
    // Interaction
    comment_id: {type:number,require:false},
>>>>>>> 40876127ba61589f780b3a83ecd8a9a2c4ce4f43
    notif_type: {type:String, require:true}, //[response, badge, comment, event]
    seen: {type:Boolean, require:true, default:false},
},
{
    timestamp : true
})

module.exports = mongoose.model("notification", NotificationSchema);