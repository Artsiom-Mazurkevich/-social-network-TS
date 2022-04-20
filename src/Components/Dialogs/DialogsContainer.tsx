import React, {FC} from 'react';
import {sendMessageAC, updateNewTextMessageAC,} from "../../redux/state";
import {Store} from "redux";
import Dialogs from "./Dialogs";
import StoreContext from '../../StoreContext';




// type dialogsType = {
//     store: Store
// }

const DialogsContainer/*: FC<dialogsType> */= () => {
    // let state = store.getState()
    //
    // const onChangeNewMessage = (text: string) => {
    //     store.dispatch(updateNewTextMessageAC(text))
    // }
    //
    // const sendMessage = () => {
    //   store.dispatch(sendMessageAC())
    // }

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState()
                    const onChangeNewMessage = (text: string) => {
                        store.dispatch(updateNewTextMessageAC(text))
                    }
                    const sendMessage = () => {
                        store.dispatch(sendMessageAC())
                    }

                    return <Dialogs onChangeNewMessage={onChangeNewMessage} sendMessage={sendMessage}
                             dialogs={state.profilePage.dialogs} messages={state.messagesPage.messages}
                             newMessageBody={state.messagesPage.newMessageText}/>}
            }
        </StoreContext.Consumer>
    );
};





export default DialogsContainer;