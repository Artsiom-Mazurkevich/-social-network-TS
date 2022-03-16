import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsDataPropsType} from "../../../index";


type MyPostsPropsType = {
    postsData: PostsDataPropsType[]
}

const MyPosts = (props: MyPostsPropsType) => {

    let PostsElements = props.postsData.map(p => <Post message={p.message} likeCounts={p.likesCount}/>);

    return (
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div className={'posts'}>
                    {PostsElements}
                </div>
            </div>
    );
};

export default MyPosts;