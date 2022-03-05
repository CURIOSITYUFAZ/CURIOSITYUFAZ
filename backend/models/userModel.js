import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
     name: {type: String, required: true},
     company: {type: String, required: true},
     email: {type: String, required: true, unique: true},
     password: {type: String, required: true},
     type: {type: String, required: true},
     phone: {type: String, required: true},
     numberemployee: {type: String, required: true},
     country: {type: String, required: true},
     description: {type: String, required: true}
    },
    {
        timestamps: true
    }
)


const User = mongoose.model('User', userSchema)
export  default User