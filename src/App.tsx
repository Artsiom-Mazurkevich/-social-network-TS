import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import Dialogs from "./Components/Dialogs/Dialogs";
import PageProfile from "./Components/PageProfile/PageProfile";
import { Route, Routes } from "react-router-dom";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import Music from "./Components/Music/Music";
import {DialogsDataPropsType, MessagesDataPropsType, PostsDataPropsType} from "./redux/state";



type AppPropsType = {
    dialogsData: DialogsDataPropsType[]
    messagesData: MessagesDataPropsType[]
    postsData: PostsDataPropsType[]
}

function App(props: AppPropsType) {
  return (
      <div className={'app-wrapper'}>
        <Header/>
        <Nav/>
        <div className={'app-wrapper-content'}>
            <Routes>
            <Route path={'/dialogs/*'} element={<Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
            <Route path={'/profile'} element={<PageProfile postsData={props.postsData}/>}/>
            <Route path={'/news'} element={<News />}/>
            <Route path={'/music'} element={<Music />}/>
            <Route path={'/settings'} element={<Settings />}/>
            </Routes>
        </div>
      </div>
  );
}

export default App;
