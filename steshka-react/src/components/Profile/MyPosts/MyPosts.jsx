import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    return (
      <div>
        Posts
        <div>
          
          <textarea></textarea>
          <button>Кнопка</button>
        </div>

          <div class={s.posts}>
          
        <Post message ='пройти урок 16' likesCount='0' />
        <Post message ='Изучаю реакт'likesCount='23' />
        <Post message ='Изучаю реакт'likesCount='16' />
        <Post message ='Изучаю реакт' likesCount='54'/>
        {props.message}
  </div>
      </div>
  
    )
}



export default MyPosts;