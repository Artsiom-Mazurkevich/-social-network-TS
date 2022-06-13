import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {
    followAC, followingInProgressAC, followThunkCreator, getUsersThunkCreator,
    setPageAC,
    unfollowAC, unfollowThunkCreator, UserType,
} from "../../redux/users-reduser";
import {UsersPresentational} from "./UsersPresentational";
import {Loader} from "@mantine/core";
import {isAuthRedirectHoc} from "../../HOC/IsAuthRedirectHOC";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersFromState
} from "../../redux/users-selectors";


type mapStateToProps = {
    items: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: Array<number>
}
type mapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    toggleFollowingProgress: (progress: boolean, userId: number) => void
    getUsersThunkCR: (currentPage: number, pageSize: number) => void
    followThunkCR: (userId: number) => void,
    unfollowThunkCR: (userId: number) => void
}
type UsersContainerPropsType = mapStateToProps & mapDispatchToProps

export class UsersAPIComponent extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.getUsersThunkCR(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkCR(pageNumber, this.props.pageSize)
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
                                     unfollowThunkCR={this.props.unfollowThunkCR}
                                     followThunkCR={this.props.followThunkCR}
                />
            </>
        )
    }
}


const mapStateToProps = (state: AppStateType) => {
    return {
        items: getUsersFromState(state),
        pageSize: getPageSize(state),
        totalCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state),
    }
}


export default compose<React.ComponentType>(
    isAuthRedirectHoc,
    connect(mapStateToProps, {
        follow: followAC,
        unfollow: unfollowAC,
        setCurrentPage: setPageAC,
        toggleFollowingProgress: followingInProgressAC,
        getUsersThunkCR: getUsersThunkCreator,
        followThunkCR: followThunkCreator,
        unfollowThunkCR: unfollowThunkCreator
    }))
(UsersAPIComponent)