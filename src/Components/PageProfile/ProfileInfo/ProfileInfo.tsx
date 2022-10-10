import React, {FC} from 'react';
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/profile-reducer";
import DefaultAvatar from '../../../images/cat-avatar.d04271ed.gif'
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {Grid, Image, Input, Loader, Text, Title} from "@mantine/core";


type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
}


const ProfileInfo: FC<ProfileInfoPropsType> = ({profile, status, updateStatus}) => {

    if (!profile) {
        return <Loader/>
    }

    return <>
        <div style={{borderBottom: '1px solid lightGray', paddingBottom: '10px'}}>
            <div style={{display: 'flex'}}>
                <Image withPlaceholder radius={'md'} mr={15} src={profile.photos.small || DefaultAvatar} alt="avatar" width={250}/>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <Title order={3}>{profile.fullName}</Title>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                    <Text mt={40} color={'dimmed'}>About {profile.aboutMe}</Text>
                    <Text mt={5} >{profile.aboutMe || 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut dolorem dolorum expedita laborum nihil officiis ratione, recusandae repellendus soluta. A aut dolores, eos eveniet maiores obcaecati quam quisquam voluptate.'}</Text>
                </div>
            </div>
        </div>
    </>
};

export default ProfileInfo;