const express=require("express");
const app=express();
const path=3000;

app.listen(path,(req,res)=>{
    console.log("Listening to 3000");
})

app.get("/login",(req,res)=>{
    res.render("login.ejs");
})

app.get("/signup",(req,res)=>{
    res.render("signup.ejs");
})


