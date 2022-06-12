import {getAuthUserDataThunkCreator} from "./auth-reducer";

type initialStateAppReducerType = {
    initialized: boolean
}
type ActionsAppReducerType = ReturnType<typeof initializedSuccess>

const initialStateAppReducer: initialStateAppReducerType = {
    initialized: false
}


export const appReducer = (state: initialStateAppReducerType = initialStateAppReducer, action: ActionsAppReducerType): initialStateAppReducerType => {
    switch (action.type) {
        case 'SET-INITIALIZED':
            return {...state, initialized: true}
        default:
            return state
    }
}


export const initializedSuccess = () => ({type: 'SET-INITIALIZED'} as const)
export const initializeApp = () => (dispatch: any) => {
    dispatch(getAuthUserDataThunkCreator()).then(() => {
        dispatch(initializedSuccess())
    })

}