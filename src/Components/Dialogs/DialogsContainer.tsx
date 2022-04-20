import React, {FC} from 'react';
import {sendMessageAC, updateNewTextMessageAC,} from "../../redux/state";
import {Store} from "redux";
import Dialogs from "./Dialogs";




type dialogsType = {
    store: Store
}

const DialogsContainer: FC<dialogsType> = ({store}) => {
    let state = store.getState()

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