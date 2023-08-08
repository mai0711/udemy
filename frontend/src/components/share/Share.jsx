//ホーム画面の投稿フォーム

import React, { useContext, useRef, useState } from 'react'
import "./Share.css"
import { Image, Gif, Face, Analytics } from "@mui/icons-material";
import { AuthContext } from "../../state/AuthContext"
import axios from 'axios';


export default function Share() {

  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER

  const { user } = useContext(AuthContext);
  const desc = useRef()

  const [ file, setFile ] = useState(null);
  // console.log(file)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id, //誰が投稿するか（今ログインしているユーザー）
      description: desc.current.value, //inputで入力した文字
    };
    if(file){
      const data = new FormData();
      const fileName = Date.now() + file.name; //Date.now()でファイルの名前が重複しないように
      data.append("name", fileName); //""内はkey
      data.append("file", file);
      //fileNameとfileの情報をdataに入れ下のpostに渡す
      newPost.img = fileName;
      try{
        //画像API
        await axios.post("/upload", data); //upload.js
      }catch(err){
        console.log(err);
      }
    }

    //api
    try {
      await axios.post("/posts", newPost); //post.jsの1
      window.location.reload(); //投稿した後、自分でリロードしなくても良くなる
    } catch(err) {
      console.log(err);
    }
  };

  return (
    <div className='share'>
      <div className="shareWArapper">
        <div className="shareTop">
          <img
          src={
            user.profilePicture
            ? user.profilePicture
            : PUBLIC_FOLDER + "person/noAvatar.png"}
          alt=''
          className='shareProfileImg'
          />
          <input
          type='text'
          className='shareInput'
          placeholder='What are you doing now?'
          ref={desc}
          />
        </div>
        <hr className="shareHr" />

        <form className="shareButtons" onSubmit={(e) => handleSubmit(e)}>
          <div className="shareOptions">
            <label className="shareOption" htmlFor='file'>
              {/* labelにすることでImageやspanを押したときにinputと同じ機能にできる（htmlForとidを同じ名前に） */}
              <Image className="shareIcon" htmlColor='blue'/>
              <span className="shareOptionText">Picture</span>
              <input
              type='file'
              id='file'
              accept='.png, .jpeg, .jpg'
              style={{display: "none"}}
              onChange={(e) => setFile(e.target.files[0])}
              />

            </label>
            <div className="shareOption">
              <Gif className="shareIcon" htmlColor='hotpink' />
              <span className="shareOptionText">GIF</span>
            </div>
            <div className="shareOption">
              <Face className="shareIcon" htmlColor='green'/>
              <span className="shareOptionText">Feelings</span>
            </div>
            <div className="shareOption">
              <Analytics className="shareIcon" htmlColor='red' />
              <span className="shareOptionText">Vote</span>
            </div>
          </div>
          <button className='shareButton' type='submit'>Post</button>
        </form>
      </div>
    </div>
  )
}
