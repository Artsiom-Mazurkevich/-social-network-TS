import axios from "axios";
import {StateUsersType} from "../redux/users-reduser";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': 'b9bcb12e-ec21-423a-a02a-c9a8061be3c5'}
})


export const getUsers = (currentPage: number, pageSize: number) => {
    return instance.get<StateUsersType>(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
}


export const UsersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<StateUsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}