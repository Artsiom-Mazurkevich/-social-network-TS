import {v1} from "uuid";

export type messagesPageType = {
    dialogs: Array<dialogsDataType>
    messages: messagesType[]
    newMessageText: string
}
export type messagesType = {
    id: string
    message: string
}
export type dialogsDataType = {
    id: string
    name: string
}

const initialStateForDialogsReducer: messagesPageType = {
    dialogs: [
        {id: v1(), name: 'Artem'},
        {id: v1(), name: 'Dima'},
        {id: v1(), name: 'Alexander'},
        {id: v1(), name: 'Nikolay'},
    ],
    messages: [
        {id: v1(), message: 'hi'},
        {id: v1(), message: 'yo'},
        {id: v1(), message: 'hello world'},
        {id: v1(), message: 'hello world'},
    ],
    newMessageText: '',
}


export const dialogsReducer = (state: messagesPageType = initialStateForDialogsReducer, action: ActionsType) => {
    switch (action.type) {
        case 'sendMessage':
            return {
                ...state,
                messages: [...state.messages, {id: v1(), message: action.messageBody}],
                newMessageText: ''
            }
        default:
            return state
    }
}

type ActionsType = ReturnType<typeof sendMessageAC>





export const sendMessageAC = (messageBody: string) => ({type: 'sendMessage', messageBody} as const)