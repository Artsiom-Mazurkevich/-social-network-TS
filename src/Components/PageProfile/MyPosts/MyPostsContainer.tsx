import React from 'react';
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/store";
import {Dispatch} from "redux";



const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage['posts'],
        newPostText: state.profilePage['newPostText'],
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewPostText: (newPostElement: string) => {
            dispatch(updateNewPostTextAC(newPostElement))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}


export const MyPostsContainerRR = connect(mapStateToProps, mapDispatchToProps)(MyPosts)