import {UsersAPI} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./store";

export type UserType = {
    followed: boolean
    id: number
    name: string
    photos: { small: null | string, large: null | string }
    status: null | string
    uniqueUrlName: null | string
}
export type StateUsersType = {
    items: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: Array<number>
}
const initialStateUsers: StateUsersType = {
    items: [],
    pageSize: 6,
    totalCount: 0,
    currentPage: 1,
    isFetching: true,
    followingProgress: []
}


export const usersReducers = (state: StateUsersType = initialStateUsers, action: ActionsTypes): StateUsersType => {
    switch (action.type) {
        case "FOLLOW": {
            return {...state, items: state.items.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        }
        case 'UNFOLLOW': {
            return {...state, items: state.items.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        }
        case 'SET_USERS': {
            return {...state, items: action.items}
        }
        case 'SET_CURRENT_PAGE': {
            return {...state,  currentPage: action.pageNumber}
        }
        case 'SET_TOTAL_USERS_COUNT': {
            return {...state, totalCount: action.totalCount}
        }
        case 'TOGGLE_FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        case 'SET_FOLLOWING_PROGRESS': {
            return {
                ...state, followingProgress: action.progress
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}

type ActionsTypes = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setPageAC>
    | ReturnType<typeof setUsersTotalCountAC>
    | ReturnType<typeof toggleIsFetchingAC>
    | ReturnType<typeof followingInProgressAC>


export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: 'SET_USERS', items: users} as const)
export const setPageAC = (pageNumber: number) => ({type: 'SET_CURRENT_PAGE', pageNumber} as const)
export const setUsersTotalCountAC = (totalCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', totalCount} as const)
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: 'TOGGLE_FETCHING', isFetching} as const)
export const followingInProgressAC = (progress: boolean, userId: number) => ({type: 'SET_FOLLOWING_PROGRESS', progress, userId} as const)



type ActionThunk = ThunkAction <void, AppStateType, unknown, ActionsTypes>
type DispatchThunk = ThunkDispatch <AppStateType, unknown, ActionsTypes>


export const getUsersThunkCreator = (currentPage: number, pageSize: number):ActionThunk => {
   return  (dispatch: DispatchThunk) => {
        dispatch(toggleIsFetchingAC(true));
        UsersAPI.getUsers(currentPage, pageSize).then(response => {
            dispatch(toggleIsFetchingAC(false));
            dispatch(setUsersAC(response.items))
            dispatch(setUsersTotalCountAC(response.totalCount))
        })
    }
}

export const followThunkCreator = (userId: number): ActionThunk => {
    return  (dispatch: DispatchThunk) => {
        dispatch(followingInProgressAC(true, userId))
        UsersAPI.followToUser(userId)
            .then(() => {dispatch(followAC(userId));dispatch(followingInProgressAC(false, userId))})
    }
}

export const unfollowThunkCreator = (userId: number): ActionThunk => {
    return  (dispatch: DispatchThunk) => {
        dispatch(followingInProgressAC(true, userId))
        UsersAPI.unfollowUser(userId)
            .then(() => {dispatch(unfollowAC(userId)); dispatch(followingInProgressAC(false, userId))})
    }
}
