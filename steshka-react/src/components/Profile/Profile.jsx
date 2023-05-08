import React from "react";
import p from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
    return <div className={p.content}>
        <img src="https://sun9-9.userapi.com/impg/Nr61MP6lYVb7jq1NE4kft6_HWkjgzRrKA6kp_A/ucN4GoPAfOc.jpg?size=896x896&quality=95&sign=55e788233b91f686987fd80a1f9e20cd&type=album" id="pfoto" alt="картинка" width={250} height={250}></img>
    <ul className="about">
        <p>Vitaliy S</p>
      <li className="about_item">Date of Birth: 2 november</li>
      <li className="about_item">City: Moscow</li>
      <li className="about_item">Education: RU777</li>
      <li className="about_item">Web Site: <a href="https://vk.com/id706936754" target="_blunk">Вконтакте</a></li>
    </ul>
    <MyPosts />

  </div>
}


export default Profile;