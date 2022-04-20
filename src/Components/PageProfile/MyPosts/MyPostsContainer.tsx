import React from 'react';
import {
    _stateType,
    addPostAC,
    postsDataType,
    sendMessageAC,
    updateNewPostTextAC,
    updateNewTextMessageAC,
} from "../../../redux/state";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";


// type myPostsPropsType = {
//     store: Store
// }

/*export const MyPostsContainer/!*: FC<myPostsPropsType>*!/ = () => {
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
                                    newPostText={state.profilePage.newPostText}/>
                }
            }
        </StoreContext.Consumer>)
};*/



// type mapStateToPropsType = {
//     posts: postsDataType[]
//     newPostText: string
// }

const mapStateToProps = (state: _stateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewPostText: (newPostElement: string) => {
            console.log('newP', newPostElement)
            dispatch(updateNewPostTextAC(newPostElement))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}


export const MyPostsContainerRR = connect(mapStateToProps, mapDispatchToProps)(MyPosts)