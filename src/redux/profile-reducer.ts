import {Dispatch} from "redux";
import {profileAPI, UsersAPI} from "../api/api";
import {v1} from "uuid";
import {AxiosResponse} from "axios";

export type profilePageType = {
    posts: postsDataType[]
    profile: ProfileType
    status: string
}
export type postsDataType = {
    id: string
    message: string
    likesCount: number
}
export type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
export type PhotosType = {
    small: string
    large: string
}
export type ProfileType = {
    aboutMe?: string
    contacts?: ContactsType
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    userId?: number
    photos?: PhotosType
}

const initialStateForProfilePage: profilePageType = {
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 20},
        {id: v1(), message: "It's my first post", likesCount: 20},
    ],
    profile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: '',
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 0,
        photos: {
            large: '',
            small: ''
        },
    },
    status: '',
}


type ActionsType = ReturnType<typeof setUserProfile>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof setProfilePhotoAC>


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
        case "SET-PROFILE-PHOTO":
            return {...state, profile:{...state.profile, photos: action.photos}}
        default:
            return state
    }
}

export const addPostAC = (newPostText: string) => ({type: 'ADD-POST', newPostText} as const)
export const setUserProfile = (profile: ProfileType) => ({type: 'SET-USER-PROFILE', profile} as const)
export const setStatusAC = (status: string) => ({type: 'SET-STATUS', status} as const)
export const deletePost = (postId: string) => ({type: 'DELETE-POST', postId} as const)
export const setProfilePhotoAC = (photos: PhotosType) => ({type: 'SET-PROFILE-PHOTO', photos} as const)


export const getUserProfileThunk = (userId: string) => async (dispatch: Dispatch) => {
    const res = await profileAPI.showUserProfile(userId)
    dispatch(setUserProfile(res))
}

export const getStatusThunk = (userId: string) => async (dispatch: Dispatch) => {
    const res = await profileAPI.getStatus(userId)
    dispatch(setStatusAC(res.data))
}

export const updateStatusThunk = (status: string) => async (dispatch: Dispatch) => {
    const res = await profileAPI.updateStatus(status)
    res.data.resultCode === 0 ? dispatch(setStatusAC(status)) : console.warn('error, profile-reducer 90')
}

export const setProfilePhotoThunk = (photo: any) => async (dispatch: Dispatch) => {
    const res = await profileAPI.setPhoto(photo);
    dispatch(setProfilePhotoAC(res.data.data.photos))
}

export const updateProfileThunk = (profile: ProfileType) => async (dispatch: Dispatch) => {
    const res: AxiosResponse<ProfileType> = await profileAPI.updateProfile(profile);
    dispatch(setUserProfile(res.data))
}