import React, {ChangeEvent, FC} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    _stateType,
    addPostActionType, dialogsDataType, sendMessageAC, sendMessageActionType,
    updateNewPostTextActionType, updateNewTextMessageAC,
    updateNewTextMessageActionType
} from "../../redux/state";
import {Store} from "redux";
import Dialogs from "./Dialogs";




type dialogsType = {
    store: Store
}

const DialogsContainer: FC<dialogsType> = ({store}) => {
    let state = store.getState()

    //let Dialogs = state.profilePage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    //let Messages = state.messagesPage.messages.map(m => <Message titleMessage={m.message} id={m.id}/>);

    //let newMessageBody = state.messagesPage.newMessageText
    
    const onChangeNewMessage = (text: string) => {
        store.dispatch(updateNewTextMessageAC(text))
    }

    const sendMessage = () => {
      store.dispatch(sendMessageAC())
    }

    return (
        <Dialogs onChangeNewMessage={onChangeNewMessage} sendMessage={sendMessage} dialogs={state.profilePage.dialogs} messages={state.messagesPage.messages} newMessageBody={state.messagesPage.newMessageText} />
    );
};





export default DialogsContainer;