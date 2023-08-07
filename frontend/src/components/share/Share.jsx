//ホーム画面の投稿フォーム

import React from 'react'
import { useContext } from 'react';
import "./Share.css"
import { Image, Gif, Face, Analytics } from "@mui/icons-material";
import { AuthContext } from "../../state/AuthContext"


export default function Share() {

  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER

  const { user } = useContext(AuthContext);

  return (
    <div className='share'>
      <div className="shareWArapper">
        <div className="shareTop">
          <img
          src={
            user.profilePicture
            ? user.profilePicture
            : PUBLIC_FOLDER + "/assets/person/noAvatar.png"}
          alt=''
          className='shareProfileImg'
          />
          <input type='text' className='shareInput' placeholder='What are you doing now?' />
        </div>
        <hr className="shareHr" />
        <div className="shareButtons">
          <div className="shareOptions">
            <div className="shareOption">
              <Image className="shareIcon" htmlColor='blue'/>
              <span className="shareOptionText">Picture</span>
            </div>
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
          <button className='shareButton'>Post</button>
        </div>
      </div>
    </div>
  )
}
