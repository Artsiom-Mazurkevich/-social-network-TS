import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";



const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.listDialogs}>
                <DialogItem name={'Artem'}/>
                <DialogItem name={'Dima'}/>
                <DialogItem name={'Alexander'}/>
                <DialogItem name={'Nikolay'}/>
            </div>
            <div className={s.listMessages}>
                <Message titleMessage={'hi'}/>
                <Message titleMessage={'yo'}/>
                <Message titleMessage={'hello world'}/>
                <Message titleMessage={'hello world'}/>
                <Message titleMessage={'hello world'}/>
            </div>
        </div>
    );
};



type DialogItemPropsType = {
    name: string
};


const DialogItem = (props: DialogItemPropsType) => {
  return (
      <div className={s.dialog}><NavLink to={`/dialogs/${props.name}`}>{props.name}</NavLink></div>
  )
};



type MessagePropsType = {
    titleMessage: string
};


const Message = (props: MessagePropsType) => {
    return (
    <div className={s.message}>{props.titleMessage}</div>
    )
};


export default Dialogs;