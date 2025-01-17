import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import ratelimit from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp";
//import mongoose from "mongoose";
import router from "./app/routes/api.js";

// const app = express();

// const express = require("express"); 
// const cors = require("cors");
// const hpp = require("hpp");
// const helmet = require("helmet");
// const cookieParser = require("cookie-parser");
// const ratelimit = require("express-rate-limit");
// const mongoose = require("mongoose");
// const router = require("./routes/api.js");


const app = express();
// Global Application Middleware
app.use(cors());
app.use(express.json({limit:"30mb"}));
app.use(hpp());
app.use(helmet());
app.use(cookieParser());
app.use(router);

const limiter = ratelimit({windows: 5 * 60 * 1000, max:500});
app.use(limiter);

//Web caching
app.set("etag", false);

//mongoose
// mongoose.connect("http://mongodb.connect", {autoIndex:true}).then(()=>{
//     console.log("Data base connected");
// }).catch((err) => { 
//     console.log("Database connection Error: " + err);

// });

app.use(router);

app.listen(5000, ()=>{
        console.log("Server running On", 5000);
});

// app.listen(4000, () =>{
//     console.log("server running on", 4000);
// });
