const Post = require("../model/Post");
exports.addNewPost= async (req, res, next) => {
    await Post.create(req.body);
    res.redirect("/");

};
exports.updatePost=async (req,res,next)=>{
    let new_title=req.body.title;
    let new_detail=req.body.detail;
    let post=await Post.findById(req.params.id);
    post.title=new_title;
    post.detail=new_detail;
    post.save();
    res.redirect("/");


}
exports.deletePost=async (req,res,next)=>{
    let post=await Post.findByIdAndDelete(req.params.id);
    res.redirect("/");

}