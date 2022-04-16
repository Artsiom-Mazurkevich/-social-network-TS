import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
//import {_stateType, store} from "./redux/state";
import {store} from "./redux/store";
import {Store} from "redux";
//import { _stateType } from "./redux/state";





const rerenderEntireTree = (state: Store) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    store={store}
                    //dispatch={store.dispatch.bind(store)}
                    //dispatch={reduxStore.dispatch.bind(reduxStore)}
                    //store={reduxStore}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store);
store.subscribe( () => {
    let state = store.getState()
    rerenderEntireTree(store)
} );

// rerenderEntireTree(store.getState());
// store.subscribe(rerenderEntireTree);


