import React, {FC} from 'react';
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/profile-reducer";
import DefaultAvatar from '../../../images/photo-1535713875002-d1d0cf377fde.avif'
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {Avatar, Grid, Image, Indicator, Input, Loader, Text, Title} from "@mantine/core";
import {IconCamera} from "@tabler/icons";


type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
}


const ProfileInfo: FC<ProfileInfoPropsType> = ({profile, status, updateStatus, isOwner}) => {

    if (!profile) {
        return <Loader/>
    }
    console.log(isOwner)

    return <>
        <div style={{borderBottom: '1px solid lightGray', paddingBottom: '10px'}}>
            <div style={{display: 'flex'}}>
                <div>
                    {/*<Indicator label={<IconCamera size={25}/>}*/}
                    <Indicator
                        label={<label style={{cursor: 'pointer'}}><IconCamera size={25}/><input
                            style={{display: 'none'}} type={'file'}/></label>}
                        inline
                        disabled={!isOwner}
                        offset={18}
                        size={40}
                        position="bottom-end"
                        color="gray" withBorder>
                        <Avatar radius={'lg'}
                                src={profile.photos.small || DefaultAvatar}
                                alt="avatar"
                                size={200}/>
                    </Indicator>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', marginLeft: '15px'}}>
                    <Title order={3}>{profile.fullName}</Title>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                    <Text mt={40} color={'dimmed'}>About {profile.aboutMe}</Text>
                    <Text
                        mt={5}>{profile.aboutMe || 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut dolorem dolorum expedita laborum nihil officiis ratione, recusandae repellendus soluta. A aut dolores, eos eveniet maiores obcaecati quam quisquam voluptate.'}</Text>
                </div>
            </div>
        </div>
    </>
};

export default ProfileInfo;