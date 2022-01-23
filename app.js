const express=require("express");

const app=express();

app.listen(3000,()=>{
    console.log("Server is listening on 3000 port");
})

app.set('view engine', 'ejs');

app.set("views","./views");



app.use(express.static("public"));



app.get("/",(req,res,next)=>{
   res.render("index.ejs");
})
app.get("/about",(req,res,next)=>{
    res.render("./about");
})
app.get("/post",(req,res,next)=>{
    res.render("./post");
})
app.get("/add_post",(req,res,next)=>{
    res.render("./add_post");
})