import React, {FC} from 'react';
import s from './PageProfile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainerRR} from "./MyPosts/MyPostsContainer";




// type pageProfileType = {
//     store: Store
// }

const PageProfile/*: FC<pageProfileType>*/ = () => {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPostsContainerRR />  {/*store={store}*/}
        </div>
    );
};

export default PageProfile;