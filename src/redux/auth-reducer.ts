import {authAPI} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./store";
import {stopSubmit} from "redux-form";
import {FormAction} from "redux-form";


export type DataAuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}


type ActionType = ReturnType<typeof setAuthUserData> | FormAction

const initialState: DataAuthType = {
    id: null,
    email: '',
    login: '',
    isAuth: false
}


export const authReducer = (state: DataAuthType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...state, ...action.data}
        default: return state
    }
}

export const setAuthUserData = (data: DataAuthType) => ({type: 'SET-USER-DATA', data} as const)


/*export const getAuthUserDataThunkCreator = () => (dispatch: Dispatch) => {
    authAPI.me().then((data) => dispatch(setAuthUserData(data)));
}*/

type ActionThunk = ThunkAction <void, AppStateType, unknown, ActionType>
type DispatchThunk = ThunkDispatch <AppStateType, unknown, ActionType>


export const getAuthUserDataThunkCreator = (): ActionThunk => (dispatch: DispatchThunk) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let data = response.data.data
            dispatch(setAuthUserData({id: data.id, email: data.email, login: data.login, isAuth: true}))
        }
    })
}

export const loginTC = (email: string, password: string, rememberMe: boolean):ActionThunk => (dispatch: DispatchThunk) => {
    const action = stopSubmit('login', {email: 'Common Error'})
    dispatch(action)
    return
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserDataThunkCreator())
        } else {
            dispatch(stopSubmit('login', {_error: 'Common Error'}))
        }
    })
}

export const logoutTC = (): ActionThunk => (dispatch: DispatchThunk) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData({email: null, login: null, id: null, isAuth: false}))
        }
    })
}