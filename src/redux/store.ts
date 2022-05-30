import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducers} from "./users-reduser";
import {authReducer} from "./auth-reducer";
import thunkMiddleWare from "redux-thunk";
import {reducer as formReducer} from 'redux-form';




export const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducers,
    auth: authReducer,
    form: formReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare))


// @ts-ignore
window.store = store