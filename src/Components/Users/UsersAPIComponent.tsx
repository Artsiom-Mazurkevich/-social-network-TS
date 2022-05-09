import React from "react";
/*
import React from "react";
import axios from "axios";
import {StateUsersType} from "../../redux/users-reduser";
import {UsersPropsType} from "./Users";
import {UsersPresentational} from "./UsersPresentational";







export class UsersAPIComponent extends React.Component<UsersPropsType & StateUsersType>{
    componentDidMount() {
        axios.get<StateUsersType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            debugger
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
    onPageChanged = (pageNumber: number) => {
        debugger
        this.props.setCurrentPage(pageNumber)
        axios.get<StateUsersType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    render() {

        let pageCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }

        return <UsersPresentational items={this.props.items}
                                    onPageChanged={this.onPageChanged}
                                    follow={this.props.follow}
                                    unfollow={this.props.unfollow}
                                    pageSize={this.props.pageSize}
                                    totalCount={this.props.totalCount}
                                    currentPage={this.props.currentPage}/>
    }
}
*/


