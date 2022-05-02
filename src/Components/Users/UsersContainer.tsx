
import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {followAC, setUsersAC,unfollowAC, UsersType} from "../../redux/users-reduser";
import {Users} from "./Users";
import {UsersClassComponent} from "./UsersClassComponent";




const mapStateToProps = (state: AppStateType) => {
    return {
        items: state.usersPage['items']
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

export const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(UsersClassComponent)

