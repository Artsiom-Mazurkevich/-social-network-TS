import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {dialogsDataType, messagesType, sendMessageAC, updateNewTextMessageAC} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/store";




type ObjFromMapState = {
    dialogs: Array<dialogsDataType>
    messages: Array<messagesType>
    newMessageBody: string
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): ObjFromMapState => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        newMessageBody: state.messagesPage.newMessageText,
        isAuth: state.auth.isAuth
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

