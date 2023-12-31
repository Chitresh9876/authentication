const mongoose = require('mongoose')
const {Schema} = mongoose

const userLoginSchema = new Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
    timeStamp:{
        type:String,
        default:Date.now,
    }
})

const userLogin = mongoose.model('userLogin',userLoginSchema)

module.exports = userLogin