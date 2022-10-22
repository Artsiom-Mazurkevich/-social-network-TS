import React, {ChangeEvent, FC} from 'react';
import {ProfileType} from "../../../redux/profile-reducer";
import DefaultAvatar from '../../../images/photo-1535713875002-d1d0cf377fde.avif'
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {Avatar, Indicator, Loader, Text, Title} from "@mantine/core";
import {IconCamera} from "@tabler/icons";


type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    setProfilePhoto: (photo: any) => void
}


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
                    <Text mt={40} color={'dimmed'}>About {profile.aboutMe}</Text>
                    <Text mt={5}>{profile.aboutMe || 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}</Text>
                </div>
            </div>
        </div>
    </>
};

export default ProfileInfo;