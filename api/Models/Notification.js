const mongoose = require("mongoose")

const NotificationSchema = mongoose.Schema({
    owner_id: {type:Number, require:false},
    club_id: {type:Number, require:false},
    performer_id: {type:Number, require:false},
    // About post 
    post_id: {type:number, require:false},
    club_post_id: {type:number, require:false},
    // Interaction
    comment_id: {type:number,require:false},
    notif_type: {type:String, require:true}, //[response, badge, comment, event]
    seen: {type:Boolean, require:true, default:false},
},
{
    timestamp : true
})

module.exports = mongoose.model("notification", NotificationSchema);