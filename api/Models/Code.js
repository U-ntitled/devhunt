const mongoose = require('mongoose');

const CodeSchema = mongoose.Schema({
   id: {type:String,require:true,unique:true},
   codefa:{type:String,require:true}
},{
    timestamps: true
}
)

module.exports =  mongoose.model("code",CodeSchema);