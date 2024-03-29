import {authAPI} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./store";
import {stopSubmit} from "redux-form";
import {Action} from "redux";


export type DataAuthType = {
    id: number
    email: string
    login: string
    isAuth: boolean
}


type ActionType = ReturnType<typeof setAuthUserData> | Action<'STOP_SUBMIT'>

const initialState: DataAuthType = {
    id: 0,
    email: '',
    login: '',
    isAuth: false
}


export const authReducer = (state: DataAuthType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...state, ...action.data}
        default:
            return state
    }
}

export const setAuthUserData = (data: DataAuthType) => ({type: 'SET-USER-DATA', data} as const)


/*export const getAuthUserDataThunkCreator = () => (dispatch: Dispatch) => {
    authAPI.me().then((data) => dispatch(setAuthUserData(data)));
}*/

type ActionThunk = ThunkAction<void, AppStateType, unknown, ActionType>
type DispatchThunk = ThunkDispatch<AppStateType, unknown, ActionType>


export const getAuthUserDataThunkCreator = (): ActionThunk => async (dispatch: DispatchThunk) => {
    const response = await authAPI.me();
    if (response.data.resultCode === 0) {
        const data = response.data.data
        dispatch(setAuthUserData({id: data.id, email: data.email, login: data.login, isAuth: true}))
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean): ActionThunk => async (dispatch: DispatchThunk) => {
    const response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserDataThunkCreator())
    } else {
        dispatch(stopSubmit('login', {_error: 'Common Error'}))
    }
}

export const logoutTC = (): ActionThunk => (dispatch: DispatchThunk) => {
    authAPI.logout()
        .then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData({email: '', login: '', id: 0, isAuth: false}))
        }
    })
}
