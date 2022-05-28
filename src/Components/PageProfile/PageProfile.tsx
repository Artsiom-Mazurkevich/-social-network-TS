import React from 'react';
import s from './PageProfile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainerRR} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";



type PageProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

const PageProfile: React.FC<PageProfilePropsType> = ({profile, status, updateStatus}) => {
    return (
        <div className={s.profile}>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
            <MyPostsContainerRR />
        </div>
    );
};

export default PageProfile;