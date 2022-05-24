import React, {FC} from 'react';
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/profile-reducer";
import DefaultAvatar from '../../../images/cat-avatar.d04271ed.gif'
import {ProfileStatus} from "./ProfileStatus";


type ProfileInfoPropsType = {
    profile: ProfileType | null
}


const ProfileInfo: FC<ProfileInfoPropsType> = ({profile}) => {

    return !profile
        ? <div className={s.wall}>
            <img src={'https://stoqk.com/wp-content/uploads/2017/03/Sea-Beach-Wallpaper-HD.jpg'}/>
        </div>
        : <>
            <div className={s.wall}>
                <img src={'https://stoqk.com/wp-content/uploads/2017/03/Sea-Beach-Wallpaper-HD.jpg'}/>
            </div>
            <div>
                <ProfileStatus status={'samurai'}/>
                <img src={profile.photos.small !== null ? profile.photos.small : DefaultAvatar} alt="avatar" width={45}/>
                <div>About Me: {profile.aboutMe}</div>
                <p>Name: {profile.fullName}</p>
            </div>
        </>

    /*if (!profile) {
        return <div className={s.wall}>
            <img src={'https://stoqk.com/wp-content/uploads/2017/03/Sea-Beach-Wallpaper-HD.jpg'}/>
        </div>
    }
    return (
        <>
            <div className={s.wall}>
                <img src={'https://stoqk.com/wp-content/uploads/2017/03/Sea-Beach-Wallpaper-HD.jpg'}/>
            </div>
            <div>
                <img src={profile.photos.small !== null ? profile.photos.small : DefaultAvatar} alt="avatar" width={45}/>
                <div>About Me: {profile.aboutMe}</div>
                <p>Name: {profile.fullName}</p>
            </div>
        </>
    );*/
};

export default ProfileInfo;