import React from "react";
import s from '../Dialogs/Dialogs.module.css'; 

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}
 
const messagesData = [
    {id: 1, message: 'привет конечно'},
    {id: 2, message: 'это не так'},
    {id: 3, message: 'каждый день'},
    {id: 4, message: 'nекст какого то содержимого'},
    {id: 5, message: 'hi'},
    {id: 6, message: 'hello'},
]

 
export function Chat (props) {
    console.log(props)
    return(
        <div className={s.messages}>
            <Message message={messagesData[0].message} />
            <Message message={messagesData[1].message} />
            </div>
    )
 }


 