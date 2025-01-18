import express from "express";
import mongoose from "mongoose"
import dotenv from "dotenv"
import menuRoute from './routes/menu.route.js'
import cartRoute from './routes/cart.route.js'

import cors from 'cors'
dotenv.config()

const app = express()

app.use(express.json())

//  Cors Origin 
app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true 
}));

const PORT = process.env.PORT || 3000;
// Database Connection
mongoose.connect(process.env.MONGODB_URL).then(() =>{
    console.log("Database connected successfully")
}).catch((err)=> console.log(err))

// Listening port
app.listen(PORT, () =>{
    console.log("Server is listening on port: ", PORT)
})

// routes
app.use('/api/menuitem', menuRoute)
app.use('/api/cart', cartRoute)