import express from "express";
import {sum} from "./sum.js"

const port = process.env.PORT || 3000;

const app = express()

app.get("/",(req,res)=>{
    return res.json({
        messages:"hello world!"
    })
})

app.get("/sum/:a/:b",(req,res) => {
    const {a,b} = req.params;
    res.json({
        sum:sum(parseInt(a),parseInt(b))
    })
})

app.listen(port,() =>{
    console.log(`app is listening on port ${port}`)
})