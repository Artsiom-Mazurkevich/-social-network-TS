import React, {LegacyRef} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsDataPropsType} from "../../../redux/state";



type MyPostsPropsType = {
    postsData: PostsDataPropsType[]
}

const MyPosts = (props: MyPostsPropsType) => {

    let PostsElements = props.postsData.map(p => <Post message={p.message} likeCounts={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        let text = newPostElement.current?.value;
        alert(text)
    }

    return (
            <div>
                My posts
                <div>
                    <textarea ref={newPostElement}></textarea>
                    <button onClick={ addPost }>Add post</button>
                </div>
                <div className={'posts'}>
                    {PostsElements}
                </div>
            </div>
    );
};

export default MyPosts;