import {
    ActionsTypes,
    addPostActionType, profilePageType,
    updateNewPostTextActionType
} from "./state";





let initialStateForProfilePage = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 20},
            {id: 2, message: "It's my first post", likesCount: 20},
        ],
        newPostText: 'IT-KAMASUTRA',
        dialogs: [
            {id: 1, name: 'Artem'},
            {id: 2, name: 'Dima'},
            {id: 3, name: 'Alexander'},
            {id: 4, name: 'Nikolay'},
        ],
}


export const profileReducer = (state: profilePageType = initialStateForProfilePage, action: ActionsTypes) => {
    switch (action.type) {
        case 'addPost':
            let newPost = {id: 5, message: action.postMessage, likesCount: 0}
            state.posts.push(newPost);
            state.newPostText = ''
            break;
        case 'updateNewPostText':
            state.newPostText = action.newText
            break;
    }
    return state
}

export const addPostAC = (postText: string): addPostActionType => ({type: 'addPost', postMessage: postText})
export const updateNewPostTextAC = (postText: string): updateNewPostTextActionType => ({
    type: 'updateNewPostText',
    newText: postText
})