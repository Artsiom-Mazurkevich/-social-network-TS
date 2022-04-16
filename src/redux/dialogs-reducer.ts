import {ActionsTypes, messages, sendMessageActionType, updateNewTextMessageActionType} from "./state";




let initialStateForDialogsReducer: messages = {
     messages:[
            {id: 1, message: 'hi'},
            {id: 2, message: 'yo'},
            {id: 3, message: 'hello world'},
            {id: 4, message: 'hello world'},
        ],
        newMessageText: '',
}


export const dialogsReducer = (state: messages = initialStateForDialogsReducer, action: ActionsTypes) => {
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