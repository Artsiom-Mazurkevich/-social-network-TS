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
            ]}
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

    dispatch(action) {
        if (action.type === 'addPost') {
            let newPost = {id: 5, message: action.postMessage, likesCount: 0}
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ''
            this._rerenderEntireTree(this._state)
        } else if (action.type === 'updateNewPostText') {
            this._state.profilePage.newPostText = action.newText
            this._rerenderEntireTree(this._state)
        }
    },
};

export type addPostActionType = {
    type: 'addPost'
    postMessage: string
}

export type updateNewPostTextActionType = {
    type: 'updateNewPostText'
    newText: string
}

export type storeType = {
    _state: _stateType,
    getState: () => _stateType
    subscribe: (observer: any) => void
    getMessages: () => Array<messagesType>
    getDialogs: () => Array<dialogsDataType>
    getPosts: () => Array<postsDataType>
    getNewPostText: () => string
    _rerenderEntireTree: (state: any) => void
    dispatch: (action: addPostActionType | updateNewPostTextActionType) => void
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

type messages = {
    messages:messagesType[]
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


