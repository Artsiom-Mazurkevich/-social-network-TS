import React from 'react';
import './App.css';
import Nav from "./Components/Nav/Nav";
import {Route, Routes} from "react-router-dom";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import Music from "./Components/Music/Music";
import IsAuthRedirectDialogsContainerHOC from "./Components/Dialogs/DialogsContainer";
import IsAuthRedirectUsersContainerHOC from "./Components/Users/UsersContainer";
import IsAuthRedirectPageProfileContainerHOC from "./Components/PageProfile/PageProfileContainer";
import HeaderContainer from "./Components/Header/HeaderCONTAINER";
import LoginContainer from "./Components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/store";
import {Loader} from "@mantine/core";


class App extends React.Component <{ initializeApp: () => void, initialized: boolean }> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        return !this.props.initialized ? <Loader variant="dots"/> : (<div className={'app-wrapper'}>
                <HeaderContainer/>
                <div className={'app-wrapper-content'}>
                    <Nav/>
                    <div className={'profile'}>
                        <Routes>
                            <Route path={'/dialogs/*'}
                                   element={
                                       <IsAuthRedirectDialogsContainerHOC/>
                                   }/>
                            <Route path={'/profile'} element={<IsAuthRedirectPageProfileContainerHOC/>}/>
                            <Route path={'/profile/:userID'} element={<IsAuthRedirectPageProfileContainerHOC/>}/>
                            <Route path={'/users'} element={<IsAuthRedirectUsersContainerHOC/>}/>
                            <Route path={'/news'} element={<News/>}/>
                            <Route path={'/music'} element={<Music/>}/>
                            <Route path={'/settings'} element={<Settings/>}/>
                            <Route path={'/login'} element={<LoginContainer/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect((state: AppStateType) => ({initialized: state.appReducer.initialized}),
    {initializeApp})
(App);
