import React, {LegacyRef} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsDataPropsType} from "../../../redux/state";



type MyPostsPropsType = {
    postsData: PostsDataPropsType[]
    addPost: (postMessage: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    let PostsElements = props.postsData.map(p => <Post message={p.message} likeCounts={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    
    const addPost = () => {
        props.addPost('');
    }
    
    const onPostChange = () => {
        let text: string = newPostElement.current?.value!;
        props.updateNewPostText(text)
    }

    return (
            <div>
                My posts
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={ onPostChange }/>
                    <button onClick={ addPost }>Add post</button>
                </div>
                <div className={'posts'}>
                    {PostsElements}
                </div>
            </div>
    );
};

export default MyPosts;