import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <>
            <div className={s.wall}><img
                src={'https://stoqk.com/wp-content/uploads/2017/03/Sea-Beach-Wallpaper-HD.jpg'}/></div>
            <div>ava + description</div>
        </>
    );
};

export default ProfileInfo;