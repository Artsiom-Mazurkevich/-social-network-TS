import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {_stateType} from "../../redux/state";




type dialogsType = {
    state: _stateType
}

const Dialogs = (props: dialogsType) => {


    let Dialogs = props.state.profilePage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let Messages = props.state.messagesPage.messages.map(m => <Message titleMessage={m.message} id={m.id}/>);


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