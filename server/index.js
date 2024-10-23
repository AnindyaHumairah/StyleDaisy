import express from "express";
import "dotenv/config";
import{ db } from "./configs/db.js"

const app= express();

const PORT = process.env.PORT;

app.get("/",(req, res) => {
    res.status(200).json({
        message: "Hello World",
    });
});

app.user("*",(req, res) => {
    res.status(404).json({
        message: "not found ",
    });
});

app.listen(PORT, () => {
    console.log(`server started, listening on port ${PORT}`);
});
