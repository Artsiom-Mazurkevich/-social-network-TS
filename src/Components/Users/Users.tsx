import React, {FC} from 'react';
import {UsersType} from "../../redux/users-reduser";
import axios, {AxiosResponse} from "axios";


type UsersPropsType = {
    users: Array<UsersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    //setUsers: (response: AxiosResponse) => AxiosResponse
}


export const Users: FC<UsersPropsType> = ({users, follow, unfollow, setUsers}) => {
    // React.useEffect(() => {
    //     setUsers([
    //         {
    //             id: 1,
    //             photoUrl: 'https://static.insales-cdn.com/images/products/1/7319/385997975/4.jpg',
    //             followed: false,
    //             fullName: 'Dominic',
    //             status: 'Focusing',
    //             location: {city: 'Wroclaw', country: 'Poland'}
    //         },
    //         {
    //             id: 2,
    //             photoUrl: 'https://www.vokrug.tv/pic/person/e/b/f/1/ebf14965f14a2a2bf01dbc0e34d5f3b6.jpg',
    //             followed: false,
    //             fullName: 'Woitek',
    //             status: 'Focusing',
    //             location: {city: 'Wroclaw', country: 'Poland'}
    //         },
    //         {
    //             id: 3,
    //             photoUrl: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/VAR1K4B6naVXVMosWMFthWz4yJYT9a6mzeLVp9pw2CI9445m7iUSct9vuxUc2JzYp4q-Kg.jpg?size=200x200&quality=96&crop=23,231,1480,1480&ava=1',
    //             followed: true,
    //             fullName: 'Zhenya',
    //             status: 'Focusing',
    //             location: {city: 'Mozyr', country: 'Belarus'}
    //         },
    //         {
    //             id: 4,
    //             photoUrl: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/wKYW5nKTtSA3jbKVPKxkdao-9rJ2UpZ3vMsPBrg9-P-_5TXyvKmhHYdA0X_HIKzI5nBvGvt3gBIlHyT1EME7Esp5.jpg?size=200x200&quality=95&crop=332,123,503,503&ava=1',
    //             followed: true,
    //             fullName: 'Leonid',
    //             status: 'Focusing',
    //             location: {city: 'Mozyr', country: 'Belarus'}
    //         },
    //     ])
    // }, [])

    if (users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
            debugger
            setUsers(response);
        })
    //     setUsers([
    //             {
    //                 id: 1,
    //                 photoUrl: 'https://static.insales-cdn.com/images/products/1/7319/385997975/4.jpg',
    //                 followed: false,
    //                 fullName: 'Dominic',
    //                 status: 'Focusing',
    //                 location: {city: 'Wroclaw', country: 'Poland'}
    //             },
    //             {
    //                 id: 2,
    //                 photoUrl: 'https://www.vokrug.tv/pic/person/e/b/f/1/ebf14965f14a2a2bf01dbc0e34d5f3b6.jpg',
    //                 followed: false,
    //                 fullName: 'Woitek',
    //                 status: 'Focusing',
    //                 location: {city: 'Wroclaw', country: 'Poland'}
    //             },
    //             {
    //                 id: 3,
    //                 photoUrl: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/VAR1K4B6naVXVMosWMFthWz4yJYT9a6mzeLVp9pw2CI9445m7iUSct9vuxUc2JzYp4q-Kg.jpg?size=200x200&quality=96&crop=23,231,1480,1480&ava=1',
    //                 followed: true,
    //                 fullName: 'Zhenya',
    //                 status: 'Focusing',
    //                 location: {city: 'Mozyr', country: 'Belarus'}
    //             },
    //             {
    //                 id: 4,
    //                 photoUrl: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/wKYW5nKTtSA3jbKVPKxkdao-9rJ2UpZ3vMsPBrg9-P-_5TXyvKmhHYdA0X_HIKzI5nBvGvt3gBIlHyT1EME7Esp5.jpg?size=200x200&quality=95&crop=332,123,503,503&ava=1',
    //                 followed: true,
    //                 fullName: 'Leonid',
    //                 status: 'Focusing',
    //                 location: {city: 'Mozyr', country: 'Belarus'}
    //             },
    //         ])
    // }


    return (
        <div>
            {users.map((u, i) => <div key={u.id} style={{
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
                    <img src={u.photoUrl} alt="image" style={{width: '40px', height: '40px', borderRadius: '50%'}}/>
                    {u.followed ? <button onClick={() => {
                        unfollow(u.id)
                    }} style={{width: '5em'}}>unfollow</button> : <button onClick={() => {
                        follow(u.id)
                    }} style={{width: '5em'}}>follow</button>}
                </div>
                <div style={{display: "flex", flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <span>{u.fullName}</span>
                        <br/>
                        <span><small>{u.status}</small></span>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <span>{u.location.country},</span>
                        <span>{u.location.city}</span>
                    </div>
                </div>
            </div>)}
        </div>
    );
};
