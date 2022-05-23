export type messagesPageType = {
    dialogs: Array<dialogsDataType>
    messages: messagesType[]
    newMessageText: string
}
export type messagesType = {
    id: number
    message: string
}
export type dialogsDataType = {
    id: number
    name: string
}

const initialStateForDialogsReducer: messagesPageType = {
    dialogs: [
        {id: 1, name: 'Artem'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Alexander'},
        {id: 4, name: 'Nikolay'},
    ],
    messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'yo'},
        {id: 3, message: 'hello world'},
        {id: 4, message: 'hello world'},
    ],
    newMessageText: '',
}


export const dialogsReducer = (state: messagesPageType = initialStateForDialogsReducer, action: updateNewTextMessageActionType | sendMessageActionType) => {
    switch (action.type) {
        case 'updateNewTextMessage':
            return {...state, newMessageText: action.newTextMessage}
        case 'sendMessage':
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: state.newMessageText}],
                newMessageText: ''
            }
        default:
            return state
    }
}


export type updateNewTextMessageActionType = {
    type: 'updateNewTextMessage'
    newTextMessage: string
}
export type sendMessageActionType = {
    type: 'sendMessage'
}
export const updateNewTextMessageAC = (newTextForMessageField: string): updateNewTextMessageActionType => ({
    type: 'updateNewTextMessage',
    newTextMessage: newTextForMessageField
})
export const sendMessageAC = (): sendMessageActionType => ({type: 'sendMessage'})