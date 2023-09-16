import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Provide User Name"],
        uniqui:true,
    },
    email:{
        type:String,
        required:[true,"Provide Email Id"],
        uniqui:true,
    },
    password:{
        type:String,
        required:[true,"Provide Password"],
    },
    isVerfied:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    },

    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date
});
const User = mongoose.models.users || mongoose.model
("users", userSchema);

export default User;