import React from 'react'
import "./Share.css"
import { Image, Gif, Face, Analytics } from "@mui/icons-material";

export default function Share() {

  const PUBLIC_FOLDER = "http://localhost:3000/assets";

  return (
    <div className='share'>
      <div className="shareWArapper">
        <div className="shareTop">
          <img
          src={PUBLIC_FOLDER + "/person/noAvatar.png"}
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
