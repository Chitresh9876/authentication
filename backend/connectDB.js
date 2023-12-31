const mongoose = require('mongoose')

const mongoURI = 'mongodb://127.0.0.1:27017/userDetails?'

const connectToMongo = ()=>{
    mongoose.connect(mongoURI)
    .then((res)=>{
        console.log("Connected to Mongo")
    })
    .catch((err)=>{
        console.log('error : ',err)
    })
}

module.exports = connectToMongo;