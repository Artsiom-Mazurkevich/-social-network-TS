import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {messagesType, sendMessageAC, updateNewTextMessageAC} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/store";
import {dialogsDataType} from "../../redux/profile-reducer";



type ObjFromMapState = {
    dialogs: Array<dialogsDataType>
    messages: Array<messagesType>
    newMessageBody: string
}

const mapStateToProps = (state: AppStateType): ObjFromMapState => {
    return {
        dialogs: state.profilePage['dialogs'],
        messages: state.messagesPage['messages'],
        newMessageBody: state.messagesPage['newMessageText']
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

