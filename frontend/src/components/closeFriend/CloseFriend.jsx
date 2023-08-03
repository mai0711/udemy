import React from 'react'

export default function CloseFriend({ user }) {

  const PUBLIC_FOLDER = "http://localhost:3000/assets";

  return (
        <li className="sidebarFriend">
            <img
            src={PUBLIC_FOLDER + user.profilePicture}
            alt=''
            className='sidebarFriendImg'
            />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
  )
}
