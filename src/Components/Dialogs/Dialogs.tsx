import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    _stateType,
    addPostActionType, sendMessageAC, sendMessageActionType,
    updateNewPostTextActionType, updateNewTextMessageAC,
    updateNewTextMessageActionType
} from "../../redux/state";




type dialogsType = {
    state: _stateType
    dispatch: (action: addPostActionType | updateNewPostTextActionType | updateNewTextMessageActionType | sendMessageActionType) => void
}

const Dialogs = (props: dialogsType) => {

    let Dialogs = props.state.profilePage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let Messages = props.state.messagesPage.messages.map(m => <Message titleMessage={m.message} id={m.id}/>);
    let newMessageBody = props.state.messagesPage.newMessageText
    
    const onChangeNewMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let message: string = e.currentTarget.value
        props.dispatch(updateNewTextMessageAC(message))
    }

    const sendMessageHandler = () => {
      props.dispatch(sendMessageAC())
    }
    return (
        <div className={s.dialogs}>
            <div className={s.listDialogs}>
                {Dialogs}
            </div>
            <div className={s.listMessages}>
                <div>{Messages}</div>
                <div>
                    <div><textarea onChange={onChangeNewMessageHandler} placeholder={'Enter your message'} value={newMessageBody}/></div>
                    <div><button onClick={sendMessageHandler}>Send</button></div>
                </div>
            </div>
        </div>
    );
};





export default Dialogs;