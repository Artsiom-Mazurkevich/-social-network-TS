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
    setProfilePhoto: (photo: any) => void
    updateProfile: (profile: ProfileType) => void
}

const PageProfile: React.FC<PageProfilePropsType> = ({profile, status, updateStatus, isOwner,setProfilePhoto, updateProfile}) => {
    return (
        <div className={s.profile}>
            <ProfileInfo isOwner={isOwner} profile={profile} status={status} updateStatus={updateStatus} setProfilePhoto={setProfilePhoto} updateProfile={updateProfile}/>
            <MyPostsContainerRR />
        </div>
    );
};

export default PageProfile;