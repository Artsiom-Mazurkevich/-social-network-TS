import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
//import {_stateType, store} from "./redux/state";
import {reduxStore} from "./redux/redux-store";
import { _stateType } from "./redux/state";


const rerenderEntireTree = (state:_stateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    //dispatch={store.dispatch.bind(store)}
                    dispatch={reduxStore.dispatch.bind(reduxStore)}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree(reduxStore.getState());
reduxStore.subscribe( () => {
    let state = reduxStore.getState()
    rerenderEntireTree(state)
} );

// rerenderEntireTree(store.getState());
// store.subscribe(rerenderEntireTree);


