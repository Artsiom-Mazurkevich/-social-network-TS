type locationType = {
    city: string
    country: string
}
export type UsersType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: locationType
}

export type StateUsersType = {
    users: Array<UsersType>
}

const initialStateUsers: StateUsersType = {
    users: []
}


export const usersReducers = (state: StateUsersType = initialStateUsers, action: followACType | unFollowACType | setUsersACType) => {
    switch (action.type) {
        case "FOLLOW": {
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        }
        case 'UNFOLLOW': {
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        }
        case 'SET_USERS': {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}


export type followACType = { type: 'FOLLOW', userId: number }
export type unFollowACType = { type: 'UNFOLLOW', userId: number }
export type setUsersACType = { type: 'SET_USERS', users: Array<UsersType> }
//type followACType12 = ReturnType<typeof followAC>
export const followAC = (userId: number): followACType => ({type: 'FOLLOW', userId})
export const unfollowAC = (userId: number): unFollowACType => ({type: 'UNFOLLOW', userId})
export const setUsersAC = (users: Array<UsersType>): setUsersACType => ({type: 'SET_USERS', users})
