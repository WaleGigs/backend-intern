import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bookRoute from './routes/books.js'
import userRoute from './routes/users.js'
import authRoute from './routes/auth.js'
import bookingRoute from './routes/bookings.js'
dotenv.config()
const app = express()
app.get("/",(req,res)=>{
    res.send("api is working")
})
const corsOptions = {
    origin:true,
    credentials:true
}
app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())
app.use('/api/v1/events', bookRoute)
app.use('/api/v1/users', userRoute)
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/booking', bookingRoute)
const port = process.env.PORT || 8000

mongoose.set("strictQuery",false);
const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
           
        })
        console.log("mongodb database connected");
       
    } catch (error) {
        console.log("mongodb connection failed");
    } 
}

app.listen(port,()=>{
    connect()
    console.log('server listening on port', port);
})