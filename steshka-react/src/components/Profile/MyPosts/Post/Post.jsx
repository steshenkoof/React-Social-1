import React from "react";
import s from './Post.module.css';


const Post = (props) => {
    return <div class={s.item}>
        <img src="https://gamerwall.pro/uploads/posts/2022-03/1646995381_59-gamerwall-pro-p-krutoi-kot-art-krasivie-oboi-69.jpg" height={50} width={50}></img>
        {props.message}
        <div>
          <span>like</span>
        </div>
        
        </div>
}



export default Post;