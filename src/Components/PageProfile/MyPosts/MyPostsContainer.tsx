import React, {FC} from 'react';
import {addPostAC, updateNewPostTextAC,} from "../../../redux/state";
import {MyPosts} from "./MyPosts";
import {Store} from "redux";
import StoreContext from '../../../StoreContext';


// type myPostsPropsType = {
//     store: Store
// }

export const MyPostsContainer/*: FC<myPostsPropsType>*/ = () => {
    // let state = store.getState()
    //
    // const addPost = () => {
    //     store.dispatch(addPostAC(state.profilePage.newPostText))
    // }
    //
    // const onPostChange = (newPostElement: string) => {
    //     store.dispatch(updateNewPostTextAC(newPostElement))
    // }

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState()
                    const addPost = () => {
                        store.dispatch(addPostAC(state.profilePage.newPostText))
                    }
                    const onPostChange = (newPostElement: string) => {
                        store.dispatch(updateNewPostTextAC(newPostElement))
                    }

                    return <MyPosts updateNewPostText={onPostChange}
                             addPost={addPost}
                             posts={state.profilePage.posts}
                             newPostText={state.profilePage.newPostText}/>}
            }
        </StoreContext.Consumer>)
};

