import React, {FC} from 'react';
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/profile-reducer";
import DefaultAvatar from '../../../images/cat-avatar.d04271ed.gif'
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {Loader} from "@mantine/core";


type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}


const ProfileInfo: FC<ProfileInfoPropsType> = ({profile, status, updateStatus}) => {
    console.log(profile)

    if (!profile) {
        return <Loader/>
    }
    return <>
        <div className={s.wall}>
            {/*<img src={'https://klike.net/uploads/posts/2019-06/1561526578_1.jpg'}/>*/}
        </div>
        <div>
            <div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
            <img src={profile.photos.small || DefaultAvatar} alt="avatar" width={45}/>
            <div>About Me: {profile.aboutMe}</div>
            <p>Name: {profile.fullName}</p>
        </div>
    </>
};

export default ProfileInfo;