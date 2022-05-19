


export type DataAuthType = {
    id: number | null
    email: string | null
    login: string | null
}


type ActionType = ReturnType<typeof setUserData>

const initialState = {
    id: null,
    email: '',
    login: ''
}


export const authReducer = (state: DataAuthType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...state, ...action.data}
        default: return state
    }
}



const setUserData = (data: DataAuthType) => ({type: 'SET-USER-DATA', data} as const)