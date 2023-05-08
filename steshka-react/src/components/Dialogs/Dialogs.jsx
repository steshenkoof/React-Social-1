import React from "react";
import s from './Dialogs.module.css'; 
import {NavLink} from 'react-router-dom';

function DialogItem (props)  {
    let path = "/dialogs/" + props.id;

    return (
         <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
         </div>
    )
}


const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}


const Dialogs = (props) => {

let dialogsData = [
    {id: 1, name: 'Vitaliy'},
    {id: 2, name: 'Valera'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Victor'},
    {id: 5, name: 'Anna'},
    {id: 6, name: 'Sasha'},
]


let messagesData = [
    {id: 1, message: 'привет конечно'},
    {id: 2, message: 'это не так'},
    {id: 3, message: 'каждый день'},
    {id: 4, message: 'nекст какого то содержимого'},
    {id: 5, message: 'hi'},
    {id: 6, message: 'hello'},
]

let dialogsElements =  [<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>,
<DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>]


 
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
 {dialogsElements }
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>  
             </div> 
            <div className={s.messages}>
            <Message message={messagesData[0].message} />
            <Message message={messagesData[1].message} />
            </div>
        </div>
    )
};

export default Dialogs;


            