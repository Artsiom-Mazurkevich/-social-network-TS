
export type UsersType = {
    followed: boolean
    id: number
    name: string
    photos: {small: null | string, large: null | string}
    status: null | string
    uniqueUrlName: null | string
}

export type StateUsersType = {
    items: Array<UsersType>
}

const initialStateUsers: StateUsersType = {
    items: []
}


export const usersReducers = (state: StateUsersType = initialStateUsers, action: followACType | unFollowACType | setUsersACType) => {
    switch (action.type) {
        case "FOLLOW": {
            return {...state, items: state.items.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        }
        case 'UNFOLLOW': {
            return {...state, items: state.items.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        }
        case 'SET_USERS': {
            return {...state, items: [...state.items, ...action.items]}
        }
        default:
            return state
    }
}


export type followACType = { type: 'FOLLOW', userId: number }
export type unFollowACType = { type: 'UNFOLLOW', userId: number }
export type setUsersACType = { type: 'SET_USERS', items: Array<UsersType> }


export const followAC = (userId: number): followACType => ({type: 'FOLLOW', userId})
export const unfollowAC = (userId: number): unFollowACType => ({type: 'UNFOLLOW', userId})
export const setUsersAC = (users: Array<UsersType>): setUsersACType => ({type: 'SET_USERS', items: users})
