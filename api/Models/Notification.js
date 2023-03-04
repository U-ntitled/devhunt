const mongoose = require("mongoose")

const NotificationSchema = mongoose.Schema({
    owner_id: {type:String, require:false},
    club_id: {type:String, require:false},
    performer_id: {type:String, require:false},
    // About post 
    post_id: {type:String, require:false},
    club_post_id: {type:String, require:false},
    // Interaction
    comment_id: {type:String,require:false},
    notif_type: {type:String, require:true}, //[response, badge, comment, event]
    seen: {type:Boolean, require:true, default:false},
},
{
    timestamp : true
})

module.exports = mongoose.model("notification", NotificationSchema);