const mongoose=require("mongoose")

async function connectDB(){
    
    await mongoose.connect("mongodb+srv://hello:csUAVizhJl5MdLsi@freecluster.2ah5ark.mongodb.net/heloi")
    console.log("connected to db")
}

module.exports =connectDB;