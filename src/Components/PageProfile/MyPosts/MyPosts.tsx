import React, {FC} from 'react';
import Post from "./Post/Post";
import {postsDataType} from "../../../redux/profile-reducer";
import {Field, reduxForm} from "redux-form";


type myPostsPropsType = {
    addPost: (newPostText: string) => void
    posts: postsDataType[]
}

export const MyPosts: FC<myPostsPropsType> = ({addPost, posts}) => {

    let PostsElements = posts.map(p => <Post key={p.id} message={p.message} likeCounts={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const onAddPost = (values: any) => {

        addPost(values.PostBody)
    }

    return (
        <div>
            My posts
            <FormPostRedux onSubmit={onAddPost}/>
            {/*<div>
                <textarea ref={newPostElement} value={newPostText} onChange={onPostChange}/>
                <button onClick={onAddPost}>Add post</button>
            </div>*/}
            <div className={'posts'}>
                {PostsElements}
            </div>
        </div>
    );
};


const FormAddPost = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={'textarea'} name={'PostBody'}/>
        <button>Add post</button>
    </form>
}

const FormPostRedux = reduxForm({form: 'post'})(FormAddPost)