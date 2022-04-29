import React from 'react';
import './App.css';
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import PageProfile from "./Components/PageProfile/PageProfile";
import { Route, Routes } from "react-router-dom";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import Music from "./Components/Music/Music";
import {DialogsContainerRR} from "./Components/Dialogs/DialogsContainer";
import {UsersContainer} from "./Components/Users/UsersContainer";







const App= () => {
  return (
      <div className={'app-wrapper'}>
        <Header/>
          <div className={'app-wrapper-content'}>
              <Nav/>
              <div className={'profile'}>
                  <Routes>
                      <Route path={'/dialogs/*'}
                             element={
                          <DialogsContainerRR />
                      }/>
                      <Route path={'/profile'} element={
                          <PageProfile />
                      }/>
                      <Route path={'/users'} element={<UsersContainer/>}/>
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
