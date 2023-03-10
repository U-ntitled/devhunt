const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    lname: { type: String, require: true },
    fname: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true, default: '' },
    profilePicture: { type: String, default: "" },
    isAdmin: { type: Boolean, default: false },
    matricule: { type: String, require: true },
    niveau: { type: String, require: true },
    // badge
    badge: { type: String },
    // restriction
    restriction: { type: Boolean, default: false },
    nbr_signal: { type: Number, default: 0 },
    nbr_recommandation: { type: Number, default: 0 }
}, {
    timestamps: true
})

module.exports = mongoose.model("user", UserSchema);
