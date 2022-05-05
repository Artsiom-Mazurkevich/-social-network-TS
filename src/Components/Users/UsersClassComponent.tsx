import React from "react";
import axios from "axios";
import {StateUsersType} from "../../redux/users-reduser";
import {UsersPropsType} from "./Users";
import s from './Users.module.css'







export class UsersClassComponent extends React.Component<UsersPropsType & StateUsersType>{

    componentDidMount() {
        axios.get<StateUsersType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            debugger
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get<StateUsersType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    // getUsers = () => {
    //     if (this.props.items.length === 0) {
    //         axios.get<StateUsersType>('https://social-network.samuraijs.com/api/1.0/users').then(response => {
    //             debugger
    //             this.props.setUsers(response.data.items)
    //         })
    //     }
    // }

    render() {

        let pageCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }

        return <div>
            <div>
                {pages.map(p => {
                    return <span
                        onClick={() => {this.onPageChanged(p)}}
                        className={this.props.currentPage === p ? s.selectedPage : s.page}>
                        {p}
                    </span>
                })}
            </div>
            {/*<button onClick={this.getUsers}>get users</button>*/}
            {this.props.items.map((u, i) => <div key={u.id} style={{
                display: 'flex',
                flexDirection: 'row',
                border: '1px solid black',
                width: '30em',
                marginBottom: '1em',
                padding: '1em',
                borderRadius: '1em'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginRight: '1em',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    minWidth: '65px'
                }}>
                    <img src={''} alt="image" style={{width: '40px', height: '40px', borderRadius: '50%'}}/>
                    {u.followed ? <button onClick={() => {
                        this.props.unfollow(u.id)
                    }} style={{width: '5em'}}>unfollow</button> : <button onClick={() => {
                        this.props.follow(u.id)
                    }} style={{width: '5em'}}>follow</button>}
                </div>
                <div style={{display: "flex", flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <span>{u.name}</span>
                        <br/>
                        <span><small>{u.status}</small></span>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <span>-----</span>
                        <span>-----</span>
                    </div>
                </div>
            </div>)}
        </div>
    }
}


