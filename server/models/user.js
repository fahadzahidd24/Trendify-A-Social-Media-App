import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        require: true,
        min: 2,
        max: 50
    },
    lastName: {
        type: String,
        require: true,
        min: 2,
        max: 50
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    friends: {
        type: Array,
        default: []
    },
    password: {
        type: String,
        require: true,
        min: 5
    },
    picturePath: {
        type: String,
        default: ''
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number
},
    { timestamps: true }
)

const User = mongoose.model("Users",userSchema);

export default User;
