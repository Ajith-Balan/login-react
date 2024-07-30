import mongoose, { Mongoose, model } from "mongoose";

const userSchema= new mongoose.Schema({
   
    email:{type:String},
    password:{type:String},
    username:{type:String},
    otp:{type:String}
   
})

export default mongoose.model.users || mongoose.model('user',userSchema)
