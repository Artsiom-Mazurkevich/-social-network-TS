import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogsDataType, messagesType} from "../../redux/state";
// import {DialogsDataPropsType, MessagesDataPropsType} from "../../redux/state";



type dialogsType = {
    dialogsData: dialogsDataType[]
    messagesData: messagesType[]
}

const Dialogs = (props: dialogsType) => {


    let Dialogs = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let Messages = props.messagesData.map(m => <Message titleMessage={m.message} id={m.id}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.listDialogs}>
                {Dialogs}
            </div>
            <div className={s.listMessages}>
                {Messages}
            </div>
        </div>
    );
};





export default Dialogs;