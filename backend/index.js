const express = require('express')
const cors = require('cors')
const connectToMongo = require('./connectDB')
const userLoginSchema = require('./models/UserLogin')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

connectToMongo()

const app = express()
const PORT = 5000

//middleware
app.use(cors()) // to connect frontend with proper backend routes used in development phase only
app.use(express.json())

app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`)
})

app.get('/', (req,res)=>{
    res.send('Home page')
})

//Sign Up : Create new user
app.post('/auth/sign-up', async (req,res)=>{
    console.log('req body -->', req?.body)
    try{
        const hashPassword = await bcrypt.hash(req?.body?.password, 10)
        const newUser = await userLoginSchema.create({
            name: req?.body?.name,
            email: req?.body?.email,
            password: hashPassword
        })
        const token = jwt.sign({
            email: req?.body?.email,
            password: req?.body?.password
        },'Secret2140108')
        //localStorage.setItem('token',token)
        res.json({
            success: true,
            message: 'Signed Up Successfully',
            data: req.body,
            token: token
        })
    }
    catch(err){
        console.log('error-->',err)
        res.json({
            success: false,
            message: 'dublicate email',
            
        })
    }
    
})

//Sign In : Loggin
app.post('/auth/sign-in', async (req,res)=>{
    console.log('req body -->', req?.body)
    const user = await userLoginSchema.findOne({email: req?.body?.email})
    const comparePassword = await bcrypt.compare(req?.body?.password, user?.password)
    if(comparePassword){
        const token = jwt.sign({
            email: user?.email,
            password: user?.password
        },'Secret2140108')
        //localStorage.setItem('token',token)
        res.json({
            success: true,
            message: 'SignIn Successful',
            token: token
        })
    }
    else{
        console.log('Enter valid creentials')
        res.json({
            message: 'Invalid Creentials'
        })
    }
    
})
