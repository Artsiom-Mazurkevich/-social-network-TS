import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {
    followAC,
    setPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    StateUsersType, toggleIsFetchingAC,
    unfollowAC,
    UsersType
} from "../../redux/users-reduser";
import {UsersPropsType} from "./Users";
import axios from "axios";
import {UsersPresentational} from "./UsersPresentational";
import {Loader} from "@mantine/core";


export class UsersAPIComponent extends React.Component<UsersPropsType & StateUsersType>{
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get<StateUsersType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get<StateUsersType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }
    render() {

        let pageCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }

        return (
            <>
                {this.props.isFetching ? <Loader size="xl" /> : null}
                <UsersPresentational items={this.props.items}
                                   onPageChanged={this.onPageChanged}
                                   follow={this.props.follow}
                                   unfollow={this.props.unfollow}
                                   pageSize={this.props.pageSize}
                                   totalCount={this.props.totalCount}
                                   currentPage={this.props.currentPage}/>
            </>)
    }
}




const mapStateToProps = (state: AppStateType) => {
    return {
        items: state.usersPage['items'],
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
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
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },
    }
}

export const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

