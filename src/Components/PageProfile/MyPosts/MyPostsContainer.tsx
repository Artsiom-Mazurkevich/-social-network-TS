import React from 'react';
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {addPostAC} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/store";
import {Dispatch} from "redux";



const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage['posts'],
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}


export const MyPostsContainerRR = connect(mapStateToProps, mapDispatchToProps)(MyPosts)