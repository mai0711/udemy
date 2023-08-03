import React, { useEffect, useState } from "react";
import "./Timeline.css"
import Share from '../share/Share'
import Post from "../post/Post"
import axios from "axios"


export default function Timeline({username}) { //Profile.jsxからpropsで受け取る

  const [posts, setPosts] = useState([]);

  // usernameが変わるたびに発火
  useEffect(() => {
    const fetchPosts = async() => {
      const response =
      username
      //usernameがあるときはしたのapiを叩く
      ? await axios.get(`/posts/profile/${username}`) //post.jsのget
      //usernameがないときはしたのapiを叩く
      : await axios.get("/posts/timeline/64c21350df0ba6d69be1e1ef") //post.jsのget
      // console.log(response);
      setPosts(response.data);
    };
    fetchPosts();
  }, [username]);


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
