import React from 'react';
import s from './PageProfile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainerRR} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";



type PageProfilePropsType = {
    profile: ProfileType | null
}

const PageProfile: React.FC<PageProfilePropsType> = ({profile}) => {
    return (
        <div className={s.profile}>
            {/*<ProfileInfo avatar={profile.photos.small} aboutMe={profile.aboutMe} name={profile.fullName}/>*/}
            <ProfileInfo profile={profile}/>
            <MyPostsContainerRR />
        </div>
    );
};

export default PageProfile;