import React from 'react';
import s from './PageProfile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {postsDataType, store} from "../../redux/state";
// import {PostsDataPropsType} from "../../redux/state";


type pageProfileType = {
    postsData: postsDataType[]
    addPost: (postMessage: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

const PageProfile = (props: pageProfileType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}
                     addPost={props.addPost}
                     newPostText={props.newPostText}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
};

export default PageProfile;