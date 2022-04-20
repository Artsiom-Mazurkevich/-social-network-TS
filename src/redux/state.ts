import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

export let store:storeType = {
    _state: {
        profilePage: {posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 20},
                {id: 2, message: "It's my first post", likesCount: 20},
            ],
            newPostText: 'IT-KAMASUTRA',
            dialogs: [
                {id: 1, name: 'Artem'},
                {id: 2, name: 'Dima'},
                {id: 3, name: 'Alexander'},
                {id: 4, name: 'Nikolay'},
            ],},

        messagesPage: {messages:[
                {id: 1, message: 'hi'},
                {id: 2, message: 'yo'},
                {id: 3, message: 'hello world'},
                {id: 4, message: 'hello world'},
            ],
            newMessageText: ''},

    },

    getState() {
        return this._state
    },
    subscribe (observer: any)  {this._rerenderEntireTree = observer},
    getMessages () {
        return this._state.messagesPage.messages
    },
    getDialogs () {
        return this._state.profilePage.dialogs
    },
    getPosts () {
        return this._state.profilePage.posts
    },
    getNewPostText () {
        return this._state.profilePage.newPostText
    },
    _rerenderEntireTree () {

    },
    /*addPost (postMessage: string) {
        let newPost = {id: 5, message: this._state.profilePage.newPostText, likesCount: 0}
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ''
        this._rerenderEntireTree()
    },
    updateNewPostText (newText: string){
        this._state.profilePage.newPostText = newText
        this._rerenderEntireTree()
    },*/
    dispatch(action: ActionsTypes) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._rerenderEntireTree(this._state)

        // if (action.type === 'addPost') {
        //     let newPost = {id: 5, message: action.postMessage, likesCount: 0}
        //     this._state.profilePage.posts.push(newPost);
        //     this._state.profilePage.newPostText = ''
        //     this._rerenderEntireTree(this._state)
        // } else if (action.type === 'updateNewPostText') {
        //     this._state.profilePage.newPostText = action.newText
        //     this._rerenderEntireTree(this._state)
        // } else if (action.type === 'updateNewTextMessage') {
        //     this._state.messagesPage.newMessageText = action.newTextMessage
        //     this._rerenderEntireTree(this._state)
        // }else if (action.type === 'sendMessage') {
        //     let bodyMessage = this._state.messagesPage.newMessageText
        //     this._state.messagesPage.newMessageText = ''
        //     let newMessage = {id: 5, message: bodyMessage}
        //     this._state.messagesPage.messages.push(newMessage)
        //     this._rerenderEntireTree(this._state)
        // }
    },
};



export type storeType = {
    _state: _stateType,
    getState: () => _stateType
    subscribe: (observer: any) => void
    getMessages: () => Array<messagesType>
    getDialogs: () => Array<dialogsDataType>
    getPosts: () => Array<postsDataType>
    getNewPostText: () => string
    _rerenderEntireTree: (state: any) => void
    dispatch: (action: addPostActionType | updateNewPostTextActionType | updateNewTextMessageActionType | sendMessageActionType) => void
}

export const addPostAC = ():addPostActionType => ({type: 'addPost'})
export const updateNewPostTextAC = (postText: string):updateNewPostTextActionType => ({type: 'updateNewPostText', newText: postText})
export const updateNewTextMessageAC = (newTextForMessageField: string):updateNewTextMessageActionType => ({type: 'updateNewTextMessage', newTextMessage: newTextForMessageField})
export const sendMessageAC = (): sendMessageActionType => ({type: 'sendMessage'})
export type ActionsTypes = addPostActionType | updateNewPostTextActionType | updateNewTextMessageActionType | sendMessageActionType
export type addPostActionType = {
    type: 'addPost'
}
export type updateNewPostTextActionType = {
    type: 'updateNewPostText'
    newText: string
}
export type updateNewTextMessageActionType = {
    type: 'updateNewTextMessage'
    newTextMessage: string
}
export type sendMessageActionType = {
    type: 'sendMessage'
}




export type _stateType = {
    profilePage: profilePageType
    messagesPage: messages
}
export type postsDataType = {
    id: number
    message: string
    likesCount: number
}
export type messages = {
    messages:messagesType[]
    newMessageText: string
}
export type messagesType = {
    id: number
    message: string
}
export type profilePageType = {
    posts: postsDataType[]
    newPostText: string
    dialogs: dialogsDataType[]

}
export type dialogsDataType = {
    id: number
    name: string
}


