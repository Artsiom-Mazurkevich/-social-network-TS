import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer
})

export type AppStateType = typeof store

export const store = createStore(rootReducer)