//ホーム画面とプロフィール画面の投稿を表示する箇所

import React, { useEffect, useState, useContext } from "react";
import "./Timeline.css"
import Share from '../share/Share'
import Post from "../post/Post"
import axios from "axios"
import { AuthContext } from "../../state/AuthContext"


export default function Timeline({username}) { //Profile.jsxからpropsで受け取る

  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);


  // usernameかuser._idが変わるたびに発火
  useEffect(() => {
    const fetchPosts = async() => {
      const response =
      username
      //usernameがあるときはしたのapiを叩く
      ? await axios.get(`/posts/profile/${username}`) //post.jsの8. = プロフィールページの（自分の投稿のみ）
      //usernameがないときはしたのapiを叩く
      : await axios.get(`/posts/timeline/${user._id}`) //post.jsの9. = ホームの（自分の投稿とフォローしている人の投稿）
      // console.log(response);
      setPosts(response.data);
    };
    fetchPosts();
  }, [username, user._id]);


  return (
    <div className='timeline'>
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => ( //useStateのposts
          <Post post={post} key={post._id} /> //postをpropsでprops.jsxに渡す
        ))}
      </div>
    </div>
  )
}
