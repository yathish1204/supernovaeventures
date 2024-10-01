import express from 'express';
import mongoose from "mongoose";
import cloudinary from "cloudinary";
import cors from "cors";
import dotenv from "dotenv";
import formRoutes from './routes/form.route.js'

const app = express();
const PORT = process.env.PORT || 2000;
const dbURL = "mongodb+srv://inayath2410:pSeR9QANvqvl57Qy@form.rbuh1.mongodb.net/supernovaEventures?retryWrites=true&w=majority&appName=form"


app.use(express.json());
// app.use(cors({origin: "http://localhost:5173/",credentials:true}))
app.use(cors())
dotenv.config();

mongoose
  .connect(dbURL, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));



cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});


app.use('/api/forms', formRoutes);
// app.use('/api/gallery', galleryRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});