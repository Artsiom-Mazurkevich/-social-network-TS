import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";


type AppPropsType = {
    DialogsData: DialogsDataPropsType[]
    MessagesData: MessagesDataPropsType[]
}

export type PostsDataPropsType = {
    id: number
    message: string
    likesCount: number
}

export let PostsData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 20},
    {id: 2, message: "It's my first post", likesCount: 20},
];

export type DialogsDataPropsType = {
    id: number
    name: string
}

export let DialogsData = [
    {id: 1, name: 'Artem'},
    {id: 2, name: 'Dima'},
    {id: 3, name: 'Alexander'},
    {id: 4, name: 'Nikolay'},
];

export type MessagesDataPropsType = {
    id: number
    message: string
}

export let MessagesData = [
    {id: 1, message: 'hi'},
    {id: 2, message: 'yo'},
    {id: 3, message: 'hello world'},
    {id: 4, message: 'hello world'},
];

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App messagesData={MessagesData} dialogsData={DialogsData} postsData={PostsData}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);


