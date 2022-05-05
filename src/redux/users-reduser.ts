
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
    pageSize: number
    totalCount: number
    currentPage: number
}

const initialStateUsers: StateUsersType = {
    items: [],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
}


export const usersReducers = (state: StateUsersType = initialStateUsers, action: followACType | unFollowACType | setUsersACType | setPageACType | setUsersTotalCountACType) => {
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
            return {...state, users: action.pageNumber, currentPage: action.pageNumber}
        }
        case 'SET_TOTAL_USERS_COUNT': {
            return {...state, totalCount: action.totalCount}
        }
        default:
            return state
    }
}


export type followACType = { type: 'FOLLOW', userId: number }
export type unFollowACType = { type: 'UNFOLLOW', userId: number }
export type setUsersACType = { type: 'SET_USERS', items: Array<UsersType> }
export type setPageACType = { type: 'SET_CURRENT_PAGE', pageNumber: number}
export type setUsersTotalCountACType = { type: 'SET_TOTAL_USERS_COUNT', totalCount: number}


export const followAC = (userId: number): followACType => ({type: 'FOLLOW', userId})
export const unfollowAC = (userId: number): unFollowACType => ({type: 'UNFOLLOW', userId})
export const setUsersAC = (users: Array<UsersType>): setUsersACType => ({type: 'SET_USERS', items: users})
export const setPageAC = (pageNumber: number): setPageACType => ({type: 'SET_CURRENT_PAGE', pageNumber})
export const setUsersTotalCountAC = (totalCount: number): setUsersTotalCountACType => ({type: 'SET_TOTAL_USERS_COUNT', totalCount})
