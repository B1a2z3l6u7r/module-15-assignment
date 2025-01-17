// const express = require ("express");
import express from "express";
import { login } from "../controlers/todoControllers.js";

const router = express.Router();

// router.get("/login", login);

router.get("/", (req, res)=>{
    res.send("Hello World")
})


export default router;

// router.get("/login", (req, res)=>{
// res.send("Welcome");
// });

// module.exports = router;

// export default router;