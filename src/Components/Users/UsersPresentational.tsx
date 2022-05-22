import React from 'react';
import {Pagination} from "@mantine/core";
import {UsersType} from "../../redux/users-reduser";
import DefaultImage from '../../images/cat-avatar.d04271ed.gif'
import {NavLink} from "react-router-dom";
import axios from "axios";
import s from './Users.module.css'
import {Button} from "@mantine/core";


export type propsType = {
    items: Array<UsersType>
    pageSize: number
    totalCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    toggleFollowingProgress: (progress: boolean, userId: number) => void
    followingProgress: Array<number>
}


export const UsersPresentational = (props: propsType) => {

    let pageCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    ;

    return (
        <div className={s.pageUsers}>
            <Pagination mb={10} total={pageCount} initialPage={props.currentPage} onChange={(e) => {
                props.onPageChanged(e)
            }}/>
            {props.items.map((u, i) => <div key={u.id} className={s.userContainer}>
                <div className={s.avatarWithButton}>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small !== null ? u.photos.small : DefaultImage} alt="image" className={s.avatarImage}/>
                    </NavLink>
                </div>
                <div className={s.infouser}>
                    <div className={s.name}>
                        {u.name}
                    </div>
                    <div className={s.status}>
                        {u.status}
                    </div>
                    <div className={s.divbtn}>
                        {u.followed ? <Button onClick={() => {
                                props.toggleFollowingProgress(true, u.id)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {withCredentials: true, headers: {'API-KEY': 'b9bcb12e-ec21-423a-a02a-c9a8061be3c5'} })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.toggleFollowingProgress(false, u.id)
                                    })
                            }} uppercase fullWidth loading={props.followingProgress.some(id => id === u.id)}>unfollow</Button>
                            : <Button onClick={() => {
                                props.toggleFollowingProgress(true, u.id)
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {withCredentials: true, headers: {'API-KEY': 'b9bcb12e-ec21-423a-a02a-c9a8061be3c5'}})
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleFollowingProgress(false, u.id)
                                    })
                            }} uppercase fullWidth loading={props.followingProgress.some(id => id === u.id)}>follow</Button>}
                    </div>
                </div>
            </div>)}
        </div>
    )
}