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
import {DialogsDataPropsType, MessagesDataPropsType, PostsDataPropsType, updateNewPostText} from "./redux/state";



type AppPropsType = {
    dialogsData: DialogsDataPropsType[]
    messagesData: MessagesDataPropsType[]
    postsData: PostsDataPropsType[]
    addPost: (postMessage: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

function App(props: AppPropsType) {
  return (
      <div className={'app-wrapper'}>
        <Header/>
          <div className={'app-wrapper-content'}>
              <Nav/>
              <div className={'profile'}>
                  <Routes>
                      <Route path={'/dialogs/*'}
                             element={<Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
                      <Route path={'/profile'} element={<PageProfile postsData={props.postsData}
                                                                     addPost={props.addPost}
                                                                     newPostText={props.newPostText}
                                                                     updateNewPostText={props.updateNewPostText}
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
