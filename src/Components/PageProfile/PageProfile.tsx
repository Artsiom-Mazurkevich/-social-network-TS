import React from 'react';
import s from './PageProfile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {_stateType, addPostActionType, updateNewPostTextActionType} from "../../redux/state";



type pageProfileType = {
    state: _stateType
    dispatch: (action: addPostActionType | updateNewPostTextActionType) => void
}

const PageProfile = (props: pageProfileType) => {
    console.log({props})

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.state.profilePage.posts}
                     newPostText={props.state.profilePage.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    );
};

export default PageProfile;