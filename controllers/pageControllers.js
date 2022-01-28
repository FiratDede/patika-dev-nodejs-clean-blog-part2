const Post = require("../model/Post");
exports.homePageController=async (req, res, next) => {
    let posts = await Post.find({});
    res.render("index.ejs", {
        posts
    });
}

exports.aboutPageController=(req, res, next) => {
    res.render("about");
}

exports.postPageController=async (req, res, next) => {
    let post = await Post.findById(req.params.id);

    res.render("post", { post });
}

exports.addPostPageController=async (req, res, next) => {
    res.render("add_post");
}
exports.editPostPageController=async (req, res, next) => {
    let post = await Post.findById(req.params.id);
    res.render("edit_post", { post });


}