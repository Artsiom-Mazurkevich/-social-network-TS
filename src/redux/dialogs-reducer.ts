
export type messages = {
    messages:messagesType[]
    newMessageText: string
}
export type messagesType = {
    id: number
    message: string
}


const initialStateForDialogsReducer: messages = {
     messages:[
            {id: 1, message: 'hi'},
            {id: 2, message: 'yo'},
            {id: 3, message: 'hello world'},
            {id: 4, message: 'hello world'},
        ],
        newMessageText: '',
}


export const dialogsReducer = (state: messages = initialStateForDialogsReducer, action: updateNewTextMessageActionType | sendMessageActionType) => {
    switch (action.type) {
        case 'updateNewTextMessage':
             const copy = {...state};
             copy.newMessageText = action.newTextMessage
                return copy
        case 'sendMessage':
            const currentText = state.newMessageText
            const copyState = {...state, newMessageText:'',messages: [...state.messages, {id: 5, message: currentText}]}
            return copyState
        default: return state
    }
}



export type updateNewTextMessageActionType = {
    type: 'updateNewTextMessage'
    newTextMessage: string
}
export type sendMessageActionType = {
    type: 'sendMessage'
}
export const updateNewTextMessageAC = (newTextForMessageField: string):updateNewTextMessageActionType => ({type: 'updateNewTextMessage', newTextMessage: newTextForMessageField})
export const sendMessageAC = (): sendMessageActionType => ({type: 'sendMessage'})