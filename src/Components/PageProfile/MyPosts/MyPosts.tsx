import React, {FC} from 'react';
import Post from "./Post/Post";
import {postsDataType} from "../../../redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../ValidationRules/validation";
import {Textarea} from "../../../ValidationRules/ReduxTextarea";


type myPostsPropsType = {
    addPost: (newPostText: string) => void
    posts: postsDataType[]
}

export class MyPosts extends React.PureComponent<myPostsPropsType> {
    render() {
        let {addPost, posts} = this.props;

        let PostsElements = posts.map(p => <Post key={p.id} message={p.message} likeCounts={p.likesCount}/>);

        let newPostElement = React.createRef<HTMLTextAreaElement>()
        const onAddPost = (values: FormDataType) => {

            addPost(values.postBody)
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
    }
}


type FormDataType = {
    postBody: string
}

const validationMaxLength = maxLengthCreator(30)
const FormAddPost: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   name={'postBody'}
                   validate={[requiredField, validationMaxLength]}
            />
            <button>Add post</button>
        </form>
    )
}

const FormPostRedux = reduxForm<FormDataType>({form: 'post'})(FormAddPost)