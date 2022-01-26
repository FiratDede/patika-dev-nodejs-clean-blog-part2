const express = require("express");
const mongoose = require("mongoose");

const Post=require("./model/Post");

const app = express();

// connect db
mongoose.connect("mongodb://127.0.0.1:27017/cleanblog-test-db", (err) => {
    if (err) {
        throw err;
    }
    console.log("Database connection succesfull");
})
// Start listening
app.listen(3000, () => {
    console.log("Server is listening on 3000 port");
})

app.set('view engine', 'ejs');

app.set("views", "./views");



app.use(express.static("public"));

app.use(express.urlencoded());
app.use(express.json());

// Home Page
app.get("/", async (req, res, next) => {
    let posts=await Post.find({});
    res.render("index.ejs",{
        posts
    });
})

// About Page
app.get("/about", (req, res, next) => {
    res.render("./about");
})

//Post Page
app.get("/post", (req, res, next) => {
    res.render("./post");
})

// Add Post Page
app.get("/add_post", async (req, res, next)  => {
    res.render("./add_post");
})

// Handle New Post Data
app.post("/posts",async (req,res,next)=>{
    await Post.create(req.body);
    res.redirect("/");

})

