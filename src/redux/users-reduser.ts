
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
    isFetching: boolean
}

const initialStateUsers: StateUsersType = {
    items: [],
    pageSize: 6,
    totalCount: 0,
    currentPage: 1,
    isFetching: true
}


export const usersReducers = (state: StateUsersType = initialStateUsers, action: ActionsTypes) => {
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
        case 'TOGGLE_FETCHING': {
            return {...state, isFetching: action.isFetching }
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


export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users: Array<UsersType>) => ({type: 'SET_USERS', items: users} as const)
export const setPageAC = (pageNumber: number) => ({type: 'SET_CURRENT_PAGE', pageNumber} as const)
export const setUsersTotalCountAC = (totalCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', totalCount} as const)
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: 'TOGGLE_FETCHING', isFetching} as const)
