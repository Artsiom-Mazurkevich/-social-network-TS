import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {
    followAC, followingInProgressAC,
    setPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    toggleIsFetchingAC,
    unfollowAC, UsersType,
} from "../../redux/users-reduser";
import {UsersPresentational} from "./UsersPresentational";
import {Loader} from "@mantine/core";
import {UsersAPI} from "../../api/api";


type mapStateToProps = {
    items: Array<UsersType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: Array<number>
}
type mapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (progress: boolean, userId: number) => void
}
type UsersContainerPropsType = mapStateToProps & mapDispatchToProps

export class UsersAPIComponent extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.items);
            this.props.setTotalUsersCount(response.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        UsersAPI.getUsers(pageNumber, this.props.pageSize).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.items)
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
                {this.props.isFetching ? <Loader size="md"/> : null}
                <UsersPresentational items={this.props.items}
                                     onPageChanged={this.onPageChanged}
                                     follow={this.props.follow}
                                     unfollow={this.props.unfollow}
                                     pageSize={this.props.pageSize}
                                     totalCount={this.props.totalCount}
                                     currentPage={this.props.currentPage}
                                     toggleFollowingProgress={this.props.toggleFollowingProgress}
                                     followingProgress={this.props.followingProgress}
                />
            </>
        )
    }
}


const mapStateToProps = (state: AppStateType) => {
    return {
        items: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    }
}


/*const mapDispatchToProps = (dispatch: Dispatch) => {
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
        toggleFollowingProgress: (progress: boolean) => {
            dispatch(followingInProgressAC(progress))
        }
    }
}*/

export const UsersContainer = connect(mapStateToProps, {
    follow: followAC,
    unfollow: unfollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setPageAC,
    setTotalUsersCount: setUsersTotalCountAC,
    toggleIsFetching: toggleIsFetchingAC,
    toggleFollowingProgress: followingInProgressAC
})(UsersAPIComponent)

