import mongoose from 'mongoose';

const userSchema = {
    id:{
        type: String,
    },
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    phone:{
        type: Number,
    },
    password:{
        type: String,
        required: true,
    }
}

export default mongoose.model("User",userSchema)