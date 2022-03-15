import React from 'react';
import s from './Post.module.css';

type PropsMessageType = {
    message: string
    likeCounts: number
}

const Post = (props: PropsMessageType) => {
    return (
        <div className={s.item}>
            <img src={'https://images5.alphacoders.com/112/thumb-350-1120452.jpg'}/>
            {props.message}
            <div>
                <span>{props.likeCounts}</span>
            </div>
        </div>

    );
};

export default Post;