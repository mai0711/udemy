const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        require: true,
        min: 6,
        max: 20,
        unique: true,
    },
    profilePicture: {
        type: String,
        default: "",
    },
    coverPicture: { // background picture in profile page
        type: String,
        default: "",
    },
    followers: {
        type: Array,
        default: [],
    },
    followings: {
        type: Array,
        default: [],
    },
    isAdmin: {  // login status (login or not login)
        type: Boolean,
        default: false,
    },
    desc: { //user info
        type: String,
        max: 50,
    },
},
    { timestamps : true }
);

module.exports = mongoose.model("User", UserSchema);//export UserSchema as "User"