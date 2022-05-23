import {Dispatch} from "redux";
import {authAPI} from "../api/api";


export type DataAuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}


type ActionType = ReturnType<typeof setAuthUserData>

const initialState: DataAuthType = {
    id: null,
    email: '',
    login: '',
    isAuth: false
}


export const authReducer = (state: DataAuthType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...state, ...action.data, isAuth: true}
        default: return state
    }
}

export const setAuthUserData = (data: DataAuthType) => ({type: 'SET-USER-DATA', data} as const)


/*export const getAuthUserDataThunkCreator = () => (dispatch: Dispatch) => {
    authAPI.me().then((data) => dispatch(setAuthUserData(data)));
}*/

export const getAuthUserDataThunkCreator = () => (dispatch: Dispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let data = response.data.data
            dispatch(setAuthUserData(data))
        }
    })
}
  
