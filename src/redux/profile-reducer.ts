import {ActionsTypes, addPostActionType, profilePageType, updateNewPostTextActionType} from "./state";

export const profileReducer = (state: profilePageType, action: ActionsTypes) => {
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

export const addPostAC = (postText: string):addPostActionType => ({type: 'addPost', postMessage: postText})
export const updateNewPostTextAC = (postText: string):updateNewPostTextActionType => ({type: 'updateNewPostText', newText: postText})