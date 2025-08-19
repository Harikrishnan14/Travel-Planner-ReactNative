import mongoose from "mongoose"
import express from "express"
import cors from "cors"
import axios from "axios"
import nodemailer from "nodemailer";

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

const mongoURI = "mongodb://127.0.0.1:27017/"
mongoose.connect(mongoURI).then(() => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.log("MongoDB connection error", err)
    process.exit(1)
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})