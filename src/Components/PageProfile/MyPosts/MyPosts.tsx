import React from 'react';
import Post from "./Post/Post";
import {addPostActionType, postsDataType,updateNewPostTextActionType} from "../../../redux/state";




type myPostsPropsType = {
    posts: Array<postsDataType>
    newPostText: string
    dispatch: (action: addPostActionType | updateNewPostTextActionType) => void
}

const MyPosts = (props: myPostsPropsType) => {

    let PostsElements = props.posts.map(p => <Post message={p.message} likeCounts={p.likesCount}/>);

    let newPostElement= React.createRef<HTMLTextAreaElement>()
    
    const addPost = () => {
        props.dispatch({type: 'addPost', postMessage: props.newPostText})
    }
    
    const onPostChange = () => {
        let text: string = newPostElement.current?.value!;
        props.dispatch({type: 'updateNewPostText', newText: text})
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