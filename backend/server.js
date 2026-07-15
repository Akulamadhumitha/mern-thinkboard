import express from "express";
// const express = require('express');
const app = express();

app.get("/api/notes",(req,res)=>{
    res.send("you have got 5 notes");
})

app.listen(5001,()=>{
    console.log("server running on port 5001");
})