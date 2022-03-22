import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import state, {addPost} from "./redux/state";
import {rerenderEntireTree} from "./render";


rerenderEntireTree()


/*export const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    messagesData={state.messagesPage.messages}
                    dialogsData={state.profilePage.dialogs}
                    postsData={state.profilePage.posts}
                    addPost={addPost}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree()*/




