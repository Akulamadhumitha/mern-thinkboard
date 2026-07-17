import express from "express";
import notesRouter from "./routes/notesRoutes.js"
// const express = require('express');
const app = express();

app.use("/api/notes",notesRouter);


app.listen(5001,()=>{
    console.log("server running on port 5001");
})