
import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {followAC, setUsersAC,unfollowAC, UsersType} from "../../redux/users-reduser";
import {Users} from "./Users";




const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage['users']
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
        }
    }
}

export const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(Users)

