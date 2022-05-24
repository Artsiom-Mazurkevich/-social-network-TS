import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {dialogsDataType, messagesType, sendMessageAC, updateNewTextMessageAC} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/store";
import {isAuthRedirectHoc} from "../../HOC/IsAuthRedirectHOC";
import {compose} from "redux";


type ObjFromMapState = {
    dialogs: Array<dialogsDataType>
    messages: Array<messagesType>
    newMessageBody: string
}

const mapStateToProps = (state: AppStateType): ObjFromMapState => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        newMessageBody: state.messagesPage.newMessageText,
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
//export default isAuthRedirectHoc (connect(mapStateToProps, mapDispatchToProps)(Dialogs))  //new version
//export const DialogsContainerRR = connect(mapStateToProps, mapDispatchToProps)(Dialogs)// old version


export default compose<React.ComponentType>(
    isAuthRedirectHoc,
    connect(mapStateToProps, mapDispatchToProps))
(Dialogs)




