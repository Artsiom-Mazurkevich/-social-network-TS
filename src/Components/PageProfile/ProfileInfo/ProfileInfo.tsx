import React, {ChangeEvent, FC} from 'react';
import {ProfileType} from "../../../redux/profile-reducer";
import DefaultAvatar from '../../../images/photo-1535713875002-d1d0cf377fde.avif'
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {Avatar, Group, Indicator, Loader, Text, Title, Tooltip} from "@mantine/core";
import {IconAt, IconBrandGithub, IconBrandInstagram, IconBrandVk, IconCamera} from "@tabler/icons";
import {Link} from "react-router-dom";


type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    setProfilePhoto: (photo: any) => void
}

const styleLink = {
    cursor: 'pointer'
}
const str = 'Click to change link'


const ProfileInfo: FC<ProfileInfoPropsType> = ({profile, status, updateStatus, isOwner, setProfilePhoto}) => {

    if (!profile) {
        return <Loader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            setProfilePhoto(e.target.files[0])
        }
    }

    return <>
        <div style={{borderBottom: '1px solid lightGray', paddingBottom: '10px'}}>
            <div style={{display: 'flex'}}>
                <div>
                    <Indicator
                        label={<label style={{cursor: 'pointer'}}><IconCamera size={25}/><input
                            style={{display: 'none'}} onChange={onMainPhotoSelected} type={'file'}/></label>}
                        inline
                        disabled={!isOwner}
                        offset={18}
                        size={40}
                        position="bottom-end"
                        color="gray" withBorder>
                        <Avatar radius={'lg'}
                                src={profile.photos?.small || DefaultAvatar}
                                alt="avatar"
                                size={200}/>
                    </Indicator>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', marginLeft: '15px'}}>
                    <Title order={3}>{profile.fullName}</Title>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                    <Group noWrap spacing={10} mt={10}>
                        <Text underline size={'md'} weight={500}>Looking for a job:</Text>
                        <Text size="md">
                            {profile.lookingForAJob ? 'Yes' : 'No'}
                        </Text>
                    </Group>
                    <Group noWrap spacing={10} mt={10}>
                        <Text underline size={'md'} weight={500}>About me:</Text>
                        <Text size="md" color={profile.aboutMe ? 'black' : 'dimmed'}>
                            {profile.aboutMe || 'No description (˘･_･˘)'}
                        </Text>
                    </Group>
                    <Group noWrap spacing={20} mt={10}>
                        <Text underline size={'md'} weight={500}>Social networks:</Text>
                        <Tooltip label={str}>
                            <IconBrandVk stroke={1.0} size={35}
                                         color={profile.contacts?.vk ? '#0077FF' : 'gray'}
                                         style={styleLink}/>
                        </Tooltip>
                        <Tooltip label={str}>
                            <IconBrandInstagram stroke={1.0}
                                                size={35}
                                                color={profile.contacts?.instagram ? '#c72ffa' : 'gray'}
                                                style={styleLink}/>
                        </Tooltip>
                        <Tooltip label={str}>
                            <IconBrandGithub stroke={1.0}
                                             size={35}
                                             color={profile.contacts?.github ? 'black' : 'gray'}
                                             style={styleLink}/>
                        </Tooltip>
                    </Group>
                    {/*<Text mt={40} color={'dimmed'}>About</Text>*/}
                    {/*<Text mt={5}>{profile.aboutMe || 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}</Text>*/}
                </div>
            </div>
        </div>
    </>
};

export default ProfileInfo;