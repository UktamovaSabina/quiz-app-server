import mongoose from "mongoose";

export default async function connect(){
   await mongoose.connect(process.env.MONGO_DB_URI)
   console.log("Database connected!");
}