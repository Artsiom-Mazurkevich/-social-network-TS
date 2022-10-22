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
    // showUserProfile(userId: string) {
    //     console.warn('Obsolete method. Please use profileAPI Object')
    //     return profileAPI.showUserProfile(userId)
    //     //return instance.get(`profile/${userId}`).then(response => response.data)
    // }
}

export const profileAPI = {
    showUserProfile(userId: string) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    getStatus (userId: string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus (status: string) {
        return instance.put(`profile/status`, {status})
    },
    setPhoto (image: any) {
        const formData = new FormData();
        formData.append('image', image)
        return instance.put(`profile/photo`, formData,{
            headers: {
                'Content-type': 'multipart/form-data'
            }
        })
    }
}


export const authAPI = {
    me() {
        return instance.get('auth/me')
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post('auth/login', {email,password,rememberMe})
    },
    logout() {
        return instance.delete('auth/login')
    },
}