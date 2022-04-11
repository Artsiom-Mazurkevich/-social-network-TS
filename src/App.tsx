import React from 'react';
import './App.css';
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import Dialogs from "./Components/Dialogs/Dialogs";
import PageProfile from "./Components/PageProfile/PageProfile";
import { Route, Routes } from "react-router-dom";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import Music from "./Components/Music/Music";
import {_stateType, addPostActionType, updateNewPostTextActionType} from "./redux/state";




type appType = {
    state: _stateType
    dispatch: (action: addPostActionType | updateNewPostTextActionType) => void
}



function App(props: appType) {
  return (
      <div className={'app-wrapper'}>
        <Header/>
          <div className={'app-wrapper-content'}>
              <Nav/>
              <div className={'profile'}>
                  <Routes>
                      <Route path={'/dialogs/*'}
                             element={<Dialogs state={props.state}/>}/>
                      <Route path={'/profile'} element={<PageProfile state={props.state}
                                                                     dispatch={props.dispatch}

                      />}/>
                      <Route path={'/news'} element={<News/>}/>
                      <Route path={'/music'} element={<Music/>}/>
                      <Route path={'/settings'} element={<Settings/>}/>
                  </Routes>
              </div>
          </div>
      </div>
  );
}

export default App;
