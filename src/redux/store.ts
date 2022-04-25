import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducers} from "./users-reduser";


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducers
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)