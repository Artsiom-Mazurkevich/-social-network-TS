import React from 'react';
import s from './PageProfile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsDataPropsType} from "../../redux/state";


type PageProfilePropsType = {
    postsData: PostsDataPropsType[]
    addPost: (postMessage: string) => void
}

const PageProfile = (props: PageProfilePropsType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData} addPost={props.addPost}/>
        </div>
    );
};

export default PageProfile;