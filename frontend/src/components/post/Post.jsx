//投稿記事１つずつ

import  React  from 'react';
import { useState, useEffect, useContext } from 'react';
import "./Post.css";
import { MoreVert } from "@mui/icons-material";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../state/AuthContext"

export default function Post({ post }) {

    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER

    const { user: currentUser } = useContext(AuthContext); //ログインしているユーザー

    const [ like, setLike ] = useState(post.likes.length);
    const [ isLiked, setIsLiked ] = useState(false);
    const [user, setUser] = useState({}); //投稿したuser

  // post.userIdが変わるたびに以下が呼び出される
    useEffect(() => {
        const fetchUser = async() => {
        const response = await axios.get(`/users?userId=${post.userId}`); //user情報をgetする
        //user.jsのget. postはtimeline.jsxで受け取ったprops userIdはmodels/User.jsのuserId. post.userIdは投稿したユーザーのuserId
            // console.log(response);
            setUser(response.data);
        };
        fetchUser();
    }, [post.userId]);


    //like function
    const handleLike = async () => {
        try{
            await axios.put(`/posts/${post._id}/like`, {userId: currentUser._id }); //posts.jsの4
        } catch(err){
            console.log(err);
        }
        setLike(isLiked ? like -1 : like +1);
        setIsLiked(!isLiked);
    };

  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <Link to={`/profile/${user.username}`} >
                    <img
                    src={
                        user.profilePicture
                        ? user.profilePicture
                        : PUBLIC_FOLDER + "person/noAvatar.png"}
                    alt=''
                    className='postProfileImg'
                    />
                    </Link>
                    <span className='postUsername'>{ user.username }</span>
                    <span className="postData">{format(post.createdAt)}</span>
                </div>
                <div className="postTopRight">
                <MoreVert />
                </div>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post.description}</span>
            <img
            className="postImg"
            src={PUBLIC_FOLDER + post.img}
            alt=""
            />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img
                className="likeIcon"
                src={PUBLIC_FOLDER + "post/heart.png"}
                alt=""
                onClick={() => handleLike()}
                />
                <span className="postLikeCounter">{like} people like it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">{post.comment} comments</span>
            </div>
        </div>
    </div>
  )
}
