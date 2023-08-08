//画面左サイド

import React, { useContext } from 'react';
import "./Sidebar.css"
import { Search, Person, Notifications, Home, MessageRounded, Bookmark, Settings } from "@mui/icons-material";
import { Users } from '../../dummyData'
import CloseFriend from '../closeFriend/CloseFriend';
import { Link } from "react-router-dom";
import { AuthContext } from "../../state/AuthContext"


export default function Sidebar() {

    const { user } = useContext(AuthContext);
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <Home className="sidebarIcon" />
                    <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                        <span className="sidebarListItemText">Home</span>
                    </Link>
                </li>
                <li className="sidebarListItem">
                    <Search className="sidebarIcon" />
                    <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                        <span className="sidebarListItemText">Search</span>
                    </Link>
                </li>
                <li className="sidebarListItem">
                    <Notifications className="sidebarIcon" />
                    <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                        <span className="sidebarListItemText">Notifications</span>
                    </Link>
                </li>
                <li className="sidebarListItem">
                    <MessageRounded className="sidebarIcon" />
                    <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                        <span className="sidebarListItemText">Messages</span>
                    </Link>
                </li>
                <li className="sidebarListItem">
                    <Bookmark className="sidebarIcon" />
                    <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                        <span className="sidebarListItemText">Bookmarks</span>
                    </Link>
                </li>
                <li className="sidebarListItem">
                    <Person className="sidebarIcon" />
                    <Link to={`/profile/${user.username}`} style={{ textDecoration: "none", color: "black" }}>
                        <span className="sidebarListItemText">Profile</span>
                    </Link>
                </li>
                <li className="sidebarListItem">
                    <Settings className="sidebarIcon" />
                    <span className="sidebarListItemText">Settings</span>
                </li>
            </ul>
            <hr className="sidebarHr" />
            <ul className="sidebarFriendList">
            {Users.map((user) => (
                <CloseFriend  user={user} key={user.id} />
            ))}
            </ul>
        </div>
    </div>
  )
}
