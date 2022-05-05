
import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {followAC, setPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC, UsersType} from "../../redux/users-reduser";
import {UsersClassComponent} from "./UsersClassComponent";




const mapStateToProps = (state: AppStateType) => {
    return {
        items: state.usersPage['items'],
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
    }
}


const mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
    }
}

export const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(UsersClassComponent)

