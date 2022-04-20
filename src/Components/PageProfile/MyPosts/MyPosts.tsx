import React, {FC} from 'react';
import Post from "./Post/Post";
import {_stateType, postsDataType,} from "../../../redux/state";


type myPostsPropsType = {
    updateNewPostText: (newPostElement: string) => void
    addPost: () => void
    posts: postsDataType[]
    newPostText: string
}

export const MyPosts: FC<myPostsPropsType> = ({updateNewPostText, addPost, posts, newPostText}) => {

    let PostsElements = posts.map(p => <Post message={p.message} likeCounts={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const onAddPost = () => {
        addPost()
    }

    const onPostChange = () => {
        let text: string = newPostElement.current?.value!;
        updateNewPostText(text)
    }

    return (
        <div>
            My posts
            <div>
                <textarea ref={newPostElement} value={newPostText} onChange={onPostChange}/>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={'posts'}>
                {PostsElements}
            </div>
        </div>
    );
};
