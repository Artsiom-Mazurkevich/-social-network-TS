import React from 'react';
import {_stateType, sendMessageAC, updateNewTextMessageAC,} from "../../redux/state";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// type dialogsType = {
//     store: Store
// }

// export const DialogsContainer/*: FC<dialogsType> */ = () => {
//     // let state = store.getState()
//     //
//     // const onChangeNewMessage = (text: string) => {
//     //     store.dispatch(updateNewTextMessageAC(text))
//     // }
//     //
//     // const sendMessage = () => {
//     //   store.dispatch(sendMessageAC())
//     // }
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//
//                     let state = store.getState()
//                     const onChangeNewMessage = (text: string) => {
//                         store.dispatch(updateNewTextMessageAC(text))
//                     }
//                     const sendMessage = () => {
//                         store.dispatch(sendMessageAC())
//                     }
//
//                     return <Dialogs onChangeNewMessage={onChangeNewMessage}
//                                     sendMessage={sendMessage}
//                                     dialogs={state.profilePage.dialogs}
//                                     messages={state.messagesPage.messages}
//                                     newMessageBody={state.messagesPage.newMessageText}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// };


const mapStateToProps = (state: _stateType) => {
    return {
        dialogs: state.profilePage.dialogs,
        messages: state.messagesPage.messages,
        newMessageBody: state.messagesPage.newMessageText
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        onChangeNewMessage: (text: string) => {
            dispatch(updateNewTextMessageAC(text))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

export const DialogsContainerRR = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

