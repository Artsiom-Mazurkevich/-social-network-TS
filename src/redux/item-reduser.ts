export type TypePhotosObj = {
    small: null | string
    large: null | string
}

export type UserType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: TypePhotosObj
    status: null | string
    followed: boolean
}

export type ItemsType = {
    items: Array<UserType>
    totalCount: number
    error: null | string
}


const initialStateUsers: ItemsType = {
    items: [],
    totalCount: 0,
    error: null,
}


export const usersReducers = (state: ItemsType = initialStateUsers, action: followACType | unFollowACType | setUsersACType): ItemsType => {
    switch (action.type) {
        case "FOLLOW": {
            return {...state, items: state.items.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        }
        case 'UNFOLLOW': {
            return {...state, items: state.items.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        }
        case 'SET_USERS': {
            return {...state, items: [...state.items, ...action.item]}
        }
        default:
            return state
    }
}


export type followACType = { type: 'FOLLOW', userId: number }
export type unFollowACType = { type: 'UNFOLLOW', userId: number }
export type setUsersACType = { type: 'SET_USERS', item: Array<UserType> }
//type followACType12 = ReturnType<typeof followAC>
export const followAC = (userId: number): followACType => ({type: 'FOLLOW', userId})
export const unfollowAC = (userId: number): unFollowACType => ({type: 'UNFOLLOW', userId})
export const setUsersAC = (item: Array<UserType>): setUsersACType => ({type: 'SET_USERS', item})
