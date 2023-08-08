import React from 'react';
import { useState, useEffect } from 'react';
import "./Profile.css";
import Topbar from '../../components/topbar/Topbar';
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Timeline from "../../components/timeline/Timeline";
import axios from "axios";
import { useParams } from "react-router-dom"

export default function Profile() {

  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER

  const [user, setUser] = useState({});
  const username = useParams().username;

// ページを読み込んだんとき一回だけuserデータを取得
useEffect(() => {
  const fetchUser = async() => {
  const response = await axios.get(`/users?username=${username}`); //user情報をgetする
  //user.jsのget. postはtimeline.jsxで受け取ったprops userIdはmodels/User.jsのuserId. post.userIdは投稿したユーザーのuserId
      // console.log(response);
      setUser(response.data);
  };
  fetchUser();
  // eslint-disable-next-line
}, []);



  return (
    <>
        <Topbar />
        <div className="profile">
            <Sidebar />
            <div className="profileRight">
                <div className="profileRightTop">
                  <div className="profileCover">
                    <img
                    src={user.coverPicture || PUBLIC_FOLDER + "post/3.jpeg"}
                    alt=""
                    className="profileCoverImg"
                    />
                    <img
                    src={ user.profilePicture || PUBLIC_FOLDER + "person/noAvatar.png"}
                    alt=""
                    className="profileUserImg"
                    />
                  </div>
                  <div className="profileInfo">
                    <h4 className="profileInfoName">{user.username}</h4>
                    <span className="profileInfoDesc">{user.desc}</span>
                  </div>
                </div>
                <div className="profileRightBottom">
                  <Timeline username={username} />  {/* usernameをpropsでTimeline.jsxへ */}
                  <Rightbar user={user} />
                </div>
            </div>
        </div>
    </>
  )
}
