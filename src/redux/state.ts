export let store = {
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
            ]}
    },

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

    getState() {
      return this._state
    },

    _rerenderEntireTree () {
        console.log('state was changed')
    },
    addPost (postMessage: string) {
        let newPost = {id: 5, message: this._state.profilePage.newPostText, likesCount: 0}
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ''
        this._rerenderEntireTree()
    },

    updateNewPostText (newText: string){
        this._state.profilePage.newPostText = newText
        this._rerenderEntireTree()
    },

    subscribe (observer: any)  {this._rerenderEntireTree = observer},

};


export type storeType = {
    _state: _stateType
    getMessages: () => messagesType
    getDialogs: () => dialogsDataType
    getPosts: () =>  postsDataType
    getNewPostText: () => string
    getState: () => _stateType
    rerenderEntireTree: () => void
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: any) => void
}


export type _stateType = {
    profilePage: profilePageType
    messagesPage: messagesType[]
}

export type postsDataType = {
    id: number
    message: string
    likesCount: number
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

/*
export type DialogsDataPropsType = {
    id: number
    name: string
}
export type MessagesDataPropsType = {
    id: number
    message: string
}
export type PostsDataPropsType = {
    id: number
    message: string
    likesCount: number
}

let state = {

    profilePage: {posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 20},
            {id: 2, message: "It's my first post", likesCount: 20},
        ], newPostText: 'IT-KAMASUTRA',
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
        ]}
};

let rerenderEntireTree = () => {
    console.log('state was changed')
}

export const addPost = (postMessage: string) => {
    let newPost = {id: 5, message: state.profilePage.newPostText, likesCount: 0}
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ''
    rerenderEntireTree()
};


export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree()
};

export const subscribe =  (observer: any) => {rerenderEntireTree = observer};

export default state;*/
