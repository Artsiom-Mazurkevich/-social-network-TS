import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
//import state, {addPost, subscribe, updateNewPostText} from "./redux/state";
import {store} from "./redux/state";


const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    messagesData={store.getMessages()}
                    dialogsData={store.getDialogs()}
                    postsData={store.getPosts()}
                    addPost={store.addPost.bind(store)}
                    newPostText={store.getNewPostText()}
                    updateNewPostText={store.updateNewPostText.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};


rerenderEntireTree();
store.subscribe(rerenderEntireTree);







/*
messagesData={state.messagesPage.messages}
dialogsData={state.profilePage.dialogs}
postsData={state.profilePage.posts}
addPost={addPost}
newPostText={state.profilePage.newPostText}
updateNewPostText={updateNewPostText}*/
