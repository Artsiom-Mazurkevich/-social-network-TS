export type profilePageType = {
    posts: postsDataType[]
    newPostText: string
    dialogs: dialogsDataType[]
    profile: null
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
    profile: null
}


type ActionsType = ReturnType<typeof setUserProfile>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof addPostAC>


export const profileReducer = (state: profilePageType = initialStateForProfilePage, action: ActionsType) => {
    switch (action.type) {
        case 'ADD-POST':
            //return {...state,posts:[...state.posts].push({id: 5, message: state.newPostText, likesCount: 0}), newPostText:''}
            let copyState = {...state}
            copyState.posts = [...state.posts]
            copyState.posts.push({id: 5, message: state.newPostText, likesCount: 0})
            copyState.newPostText = ''
            return copyState
        case 'UPDATE-NEW-POST-TEXT':
            //state.newPostText = action.newText
            //return {...state}.newPostText = action.newText
            let copy = {...state}
            copy.newPostText = action.newText
            return copy
        case "SET-USER-PROFILE":
            return {...state, posts: action.profile}
        default:
            return state
    }
}

export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const updateNewPostTextAC = (postText: string) => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText: postText
} as const)
export const setUserProfile = (profile: any) => ({type: 'SET-USER-PROFILE', profile} as const)