import React, {FC} from 'react';
import {StateUsersType, UserType} from "../../redux/users-reduser";
import axios from "axios";


export type UsersPropsType = {
    items: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}


export const Users: FC<UsersPropsType> = ({items, follow, unfollow, setUsers}) => {

        const getUsers = () => {
            if (items.length === 0) {
                axios.get<StateUsersType>('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                    debugger
                    setUsers(response.data.items)
                })
            }
        }




    return (
        <div>
            <button onClick={getUsers}>get users</button>
            {items.map((u, i) => <div key={u.id} style={{
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
                        unfollow(u.id)
                    }} style={{width: '5em'}}>unfollow</button> : <button onClick={() => {
                        follow(u.id)
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
    );
};
