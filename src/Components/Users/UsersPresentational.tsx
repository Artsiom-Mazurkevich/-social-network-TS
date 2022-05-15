import React from 'react';
import {Pagination} from "@mantine/core";
import {UsersType} from "../../redux/users-reduser";



export type propsType = {
    items: Array<UsersType>
    pageSize: number
    totalCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
}



export const UsersPresentational = (props: propsType) => {

    let pageCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    ;

    return (
        <div>
            <Pagination total={pageCount} initialPage={props.currentPage} onChange={(e) => {
                props.onPageChanged(e)
            }}/>
            {props.items.map((u, i) => <div key={u.id} style={{
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
                        props.unfollow(u.id)
                    }} style={{width: '5em'}}>unfollow</button> : <button onClick={() => {
                        props.follow(u.id)
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
    )
}