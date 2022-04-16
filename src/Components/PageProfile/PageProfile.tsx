import React, {FC} from 'react';
import s from './PageProfile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {Store} from "redux";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";



type pageProfileType = {
    store: Store
}

const PageProfile: FC<pageProfileType> = ({store}) => {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPostsContainer store={store}/>
        </div>
    );
};

export default PageProfile;