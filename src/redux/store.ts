import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducers} from "./users-reduser";
import {authReducer} from "./auth-reducer";




export const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducers,
    auth: authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)


// @ts-ignore
window.store = store