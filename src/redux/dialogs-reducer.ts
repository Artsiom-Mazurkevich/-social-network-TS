import {ActionsTypes, messages, sendMessageActionType, updateNewTextMessageActionType} from "./state";

export const dialogsReducer = (state: messages, action: ActionsTypes) => {
    switch (action.type) {
        case 'updateNewTextMessage':
            state.newMessageText = action.newTextMessage
            break;
        case 'sendMessage':
            let bodyMessage = state.newMessageText
            state.newMessageText = ''
            let newMessage = {id: 5, message: bodyMessage}
            state.messages.push(newMessage)
            break;
    }
    return state
}

export const updateNewTextMessageAC = (newTextForMessageField: string):updateNewTextMessageActionType => ({type: 'updateNewTextMessage', newTextMessage: newTextForMessageField})
export const sendMessageAC = (): sendMessageActionType => ({type: 'sendMessage'})