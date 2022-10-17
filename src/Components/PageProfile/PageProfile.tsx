import React from 'react';
import s from './PageProfile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainerRR} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";
import login from "../Login/Login";



type PageProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
}

const PageProfile: React.FC<PageProfilePropsType> = ({profile, status, updateStatus, isOwner}) => {
    console.log(isOwner)
    return (
        <div className={s.profile}>
            <ProfileInfo isOwner={isOwner} profile={profile} status={status} updateStatus={updateStatus}/>
            <MyPostsContainerRR />
        </div>
    );
};

export default PageProfile;