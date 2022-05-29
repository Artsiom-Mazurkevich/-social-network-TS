import {Dispatch} from "redux";
import {profileAPI, UsersAPI} from "../api/api";

export type profilePageType = {
    posts: postsDataType[]
    newPostText: string
    profile: null | ProfileType
    status: string
}
export type postsDataType = {
    id: number
    message: string
    likesCount: number
}
export type ContactsType = {
    facebook: string
    website: null
    vk: string
    twitter: string
    instagram: string
    youtube: null
    github: string
    mainLink: null
}
export type PhotosType = {
    small: string
    large: string
}
export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}

const initialStateForProfilePage: profilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 20},
        {id: 2, message: "It's my first post", likesCount: 20},
    ],
    newPostText: 'IT-KAMASUTRA',
    profile: null,
    status: ''
}


type ActionsType = ReturnType<typeof setUserProfile>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setStatusAC>


export const profileReducer = (state: profilePageType = initialStateForProfilePage, action: ActionsType):profilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: state.newPostText, likesCount: ~~(Math.random() * 45)}],
                newPostText: ''
            }
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.newText}
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case 'SET-STATUS':
            return {...state, status: action.status}
        default:
            return state
    }
}

export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const updateNewPostTextAC = (postText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: postText} as const)
export const setUserProfile = (profile: ProfileType) => ({type: 'SET-USER-PROFILE', profile} as const)
export const setStatusAC = (status: string) => ({type: 'SET-STATUS', status} as const)


export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    UsersAPI.showUserProfile(userId).then(data => dispatch(setUserProfile(data)));
}

export const getStatusThunk = (userId: string) => (dispatch: Dispatch) => {
  profileAPI.getStatus(userId).then(res => {
      dispatch(setStatusAC(res.data))
  })
}

export const updateStatusThunk = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status).then(res => {
        res.data.resultCode === 0 ? dispatch(setStatusAC(status)) : console.log('error, profile-reducer 95')
    })
}