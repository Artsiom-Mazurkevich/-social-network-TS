import React, {FC} from 'react';
import s from './Post.module.css';

type PropsMessageType = {
    message: string
    likeCounts: number
}

const Post: FC<PropsMessageType> = ({message, likeCounts}) => {
    return (
        <div className={s.item}>
            <img src={'https://images5.alphacoders.com/112/thumb-350-1120452.jpg'}/>
            {message}
            <div>
                <span>{likeCounts}</span>
            </div>
        </div>

    );
};

export default Post;