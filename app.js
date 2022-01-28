const express = require("express");
const methodOverride = require('method-override')
const mongoose = require("mongoose");

const postControllers=require("./controllers/postControllers");
const pageControllers=require("./controllers/pageControllers");



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

app.use(methodOverride('_method', { methods: ["POST", "GET"] }));

// Home Page
app.get("/",pageControllers.homePageController)

// About Page
app.get("/about", pageControllers.aboutPageController)

//Post Page
app.get("/posts/:id", pageControllers.postPageController)

// Add Post Page
app.get("/add_post", pageControllers.addPostPageController)

// Edit Post Page
app.get("/edit_post/:id",pageControllers.editPostPageController )
// Add New Post 
app.post("/posts", postControllers.addNewPost)
//Update Post
app.put("/update_post/:id",postControllers.updatePost)
//Delete Post
app.delete("/delete_post/:id",postControllers.deletePost)

