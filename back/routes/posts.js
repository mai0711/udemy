const express = require('express');
const router = express.Router();
const Post = require("../models/Post");
const User = require("../models/User");

//1.create a post
router.post("/", async (req, res) => {
    const newPost = new Post(req.body)
    try{
        const savePost = await newPost.save();
        return res.status(200).json(savePost);
    }catch(err){
        return res.status(500).json(err);
    }
});

//2.update a post
router.put("/:id", async(req, res) => { //id = post id
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne( {$set: req.body} );
            return res.status(200).json("The post has been updated")
        }else{
            return res.status(403).json("You can update only your post")
        }
    }catch(err){
        return res.status(500).json(err)
    }
})

//3.delete a post
router.delete("/:id", async(req, res) => { //id = post id
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne( {$set: req.body} );
            return res.status(200).json("The post has been deleted")
        }else{
            return res.status(403).json("You can delete only your post")
        }
    }catch(err){
        return res.status(500).json(err)
    }
});

//4.like or dislike a post
router.put("/:id/like", async(req, res) => { //id = post id
    try{
        const post = await Post.findById(req.params.id);
        //like
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({ $push: { likes: req.body.userId } });
            return res.status(200).json("The post has been liked")
        }else{ //dislike
            await post.updateOne({ $pull: { likes: req.body.userId } });
            return res.status(200).json("The post has been disliked")
        }
    }catch(err){
        res.status(500).json(err);
    }
})

//5.get a post
router.get("/:id", async (req, res) => { //id = post id
    try{
        const post = await Post.findById(req.params.id); //post id
        res.status(200).json(post);
    }catch(err){
        res.status(500).json(err);
    }
})

//6.get all posts
router.get("/api/v1/allPosts", async(req, res) =>{
    try{
        const allPosts = await Post.find({});
        res.status(200).json(allPosts);
    } catch(err) {
        res.status(500).json(err);
    }
})

//7.get only all of my posts
router.get("/api/v1/allMyPosts", async(req, res) =>{
    try{
        //get all posts
        const allPosts = await Post.find({});
        //get only my posts
        const myPosts = await Promise.all(
            allPosts.filter((allMyPost) => {
                return allMyPost.userId == req.body.userId
            })
            );
            return res.status(200).json(myPosts);
    } catch(err) {
        return res.status(500).json(err);
    }
})

//8.get all of my posts(profile page)
router.get("/profile/:username", async (req, res) => {
    try{
        const user = await User.findOne({ username:req.params.username }); //1つのユーザー名から探すのでfindOne. findOneはプロパティが必要なのでusername:で指定
        const posts = await Post.find({ userId: user._id });
        return res.status(200).json(posts);
    }catch(err){
        return res.status(500).json(err);
    }
})

//9.get all of following people's posts and my posts
router.get("/timeline/:userId", async (req, res) => {
    try{
        const currentUser = await User.findById(req.params.userId);
        const userPosts = await Post.find({ userId: currentUser._id });
        //get all of the friend's posts
        const friendPosts = await Promise.all(
            currentUser.followings.map(friendId => {
            return Post.find({ userId: friendId });
            })
        );
        return res.json(userPosts.concat(...friendPosts)); // combine my posts and friend's posts
    }catch(err){
        return res.status(500).json(err);
    }
})


module.exports = router;