import {AppStateType} from "./store";

export const getUsersFromState = (state: AppStateType) => {
    return state.usersPage.items
}

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalCount
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingProgress = (state: AppStateType) => {
    return state.usersPage.followingProgress
}