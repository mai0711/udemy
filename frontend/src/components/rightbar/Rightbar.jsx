import React from 'react'
import "./Rightbar.css"
import { Users } from '../../dummyData'
import Online from '../online/Online'

export default function Rightbar({profile}) {

  const PUBLIC_FOLDER = "http://localhost:3000/assets";

  // rightbar in Home page
  const HomeRightbar = () => {
    return(
      <>
        <div className="eventContainer">
          <img
          src="https://img.freepik.com/free-vector/start_53876-25533.jpg?w=2000"
          alt=""
          className='starImg'
          />
          <span className="eventText">
            <b>Limited to Follower</b> event in Progress
          </span>
        </div>
        <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWPl4RCrcGH9R8G_ospbwXJuiNjBpfDcgiKw&usqp=CAU'
        alt=''
        className='eventImg'
        />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <Online user={user} key={user.id} />
          ))}
        </ul>
        <p className='promotionTitle'>Advertisement</p>
        <img
        src='https://static.vecteezy.com/system/resources/previews/001/349/582/non_2x/bubble-tea-advertisment-on-blue-bokeh-free-vector.jpg'
        alt=''
        className='rightbarPromotionImg'
        />
        <p className='promotionName'>Tea</p>
        <img
        src='https://newspaperads.ads2publish.com/wp-content/uploads/2018/04/lifestyle-shopping-mall-flat-25-off-ad-bombay-times-07-04-2018.png'
        alt=''
        className='rightbarPromotionImg'
        />
        <p className='promotionName'>Shopping</p>
        <img
        src='http://www.cybertekim.com/wp-content/uploads/2012/02/BDburgerAd.jpg'
        alt=''
        className='rightbarPromotionImg'
        />
        <p className='promotionName'>Food</p>
      </>
    )
  }

  // rightbar in profile page
  const ProfileRightbar = () => {
    return (
      <>
      <h4 className='rightbarTitle'>User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Country : </span>
          <span className="rightbarInfoKey">Japan</span>
        </div>
          <h4 className="rightbarTitle">Your friends</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img
              src={PUBLIC_FOLDER + "/post/2.jpeg"}
              alt=""
              className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Mike</span>
            </div>
            <div className="rightbarFollowing">
              <img
              src={PUBLIC_FOLDER + "/post/3.jpeg"}
              alt=""
              className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Maria</span>
            </div>
            <div className="rightbarFollowing">
              <img
              src={PUBLIC_FOLDER + "/post/4.jpeg"}
              alt=""
              className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Yamada</span>
            </div>
            <div className="rightbarFollowing">
              <img
              src={PUBLIC_FOLDER + "/post/5.jpeg"}
              alt=""
              className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Tanaka</span>
            </div>
          </div>
        </div>
      </>
    )
  };

  return (
    <>
    <div className='rightbar'>
      <div className="rightbarawrapper">
        {/* when there is profile(props), use the design for ProfileRightbar */}
        { profile ? <ProfileRightbar /> : <HomeRightbar /> }
      </div>
    </div>
    </>
  )

}
