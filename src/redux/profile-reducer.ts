import {Dispatch} from "redux";
import {profileAPI, UsersAPI} from "../api/api";
import {v1} from "uuid";

export type profilePageType = {
    posts: postsDataType[]
    profile: null | ProfileType
    status: string
}
export type postsDataType = {
    id: string
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
        {id: v1(), message: 'Hi, how are you?', likesCount: 20},
        {id: v1(), message: "It's my first post", likesCount: 20},
    ],
    profile: null,
    status: ''
}


type ActionsType = ReturnType<typeof setUserProfile>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof deletePost>


export const profileReducer = (state: profilePageType = initialStateForProfilePage, action: ActionsType): profilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                posts: [...state.posts, {id: v1(), message: action.newPostText, likesCount: ~~(Math.random() * 45)}]
            }
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case 'SET-STATUS':
            return {...state, status: action.status}
        case "DELETE-POST":
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        default:
            return state
    }
}

export const addPostAC = (newPostText: string) => ({type: 'ADD-POST', newPostText} as const)
export const setUserProfile = (profile: ProfileType) => ({type: 'SET-USER-PROFILE', profile} as const)
export const setStatusAC = (status: string) => ({type: 'SET-STATUS', status} as const)
export const deletePost = (postId: string) => ({type: 'DELETE-POST', postId} as const)


export const getUserProfile = (userId: string) => async (dispatch: Dispatch) => {
    const res = await UsersAPI.showUserProfile(userId)
    dispatch(setUserProfile(res.data))
}

export const getStatusThunk = (userId: string) => async (dispatch: Dispatch) => {
    const res = await profileAPI.getStatus(userId)
    dispatch(setStatusAC(res.data))
}

export const updateStatusThunk = (status: string) => async (dispatch: Dispatch) => {
    const res = await profileAPI.updateStatus(status)
    res.data.resultCode === 0 ? dispatch(setStatusAC(status)) : console.log('error, profile-reducer 90')
}