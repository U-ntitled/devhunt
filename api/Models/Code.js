const mongoose = require('mongoose');

const CodeSchema = mongoose.Schema({
   id: {type:String,require:true,unique:true},
   codetfa:{type:String,require:true},
   test: {type:String,require:true,unique:true},
},{
    timestamps: true
}
)

module.exports =  mongoose.model("code",CodeSchema);