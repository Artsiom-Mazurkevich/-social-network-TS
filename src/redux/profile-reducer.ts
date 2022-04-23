export type profilePageType = {
    posts: postsDataType[]
    newPostText: string
    dialogs: dialogsDataType[]

}
export type dialogsDataType = {
    id: number
    name: string
}
export type postsDataType = {
    id: number
    message: string
    likesCount: number
}

const initialStateForProfilePage: profilePageType = {
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


export const profileReducer = (state: profilePageType = initialStateForProfilePage, action: addPostActionType | updateNewPostTextActionType) => {
    switch (action.type) {
        case 'addPost':
            //return {...state,posts:[...state.posts].push({id: 5, message: state.newPostText, likesCount: 0}), newPostText:''}
            let copyState = {...state}
            copyState.posts = [...state.posts]
            copyState.posts.push({id: 5, message: state.newPostText, likesCount: 0})
            copyState.newPostText = ''
            return copyState
        case 'updateNewPostText':
            //state.newPostText = action.newText
            //return {...state}.newPostText = action.newText
            let copy = {...state}
            copy.newPostText = action.newText
            return copy

        default:
            return state
    }
}


export type addPostActionType = {
    type: 'addPost'
}
export type updateNewPostTextActionType = {
    type: 'updateNewPostText'
    newText: string
}
export const addPostAC = (): addPostActionType => ({type: 'addPost'})    //postText: string
export const updateNewPostTextAC = (postText: string): updateNewPostTextActionType => ({
    type: 'updateNewPostText',
    newText: postText
})