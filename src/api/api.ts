import axios from "axios";
import {StateUsersType} from "../redux/users-reduser";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': 'b9bcb12e-ec21-423a-a02a-c9a8061be3c5'}
})


export const UsersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<StateUsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followToUser(userId: number) {
        return instance.post(`follow/${userId}`, {}).then(response => {
            if (response.data.resultCode === 0) {
                return response
            }
        })
    },
    unfollowUser(userId: number) {
        return instance.delete(`follow/${userId}`).then(response => {
            if (response.data.resultCode === 0) {
                return response
            }
        })
    },
    showUserProfile(userId: string) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    }
}


export const authAPI = {
    /*me() {
        debugger
        return instance.get('auth/me').then((response) => {
            if (response.data.resultCode === 0) {
                return response.data
            }
        })
    }*/
    me() {
        return instance.get('auth/me')
    }
}