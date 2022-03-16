import s from "../Dialogs.module.css";
import React from "react";

export type MessagePropsType = {
    titleMessage: string
    id: number
};


const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.titleMessage}</div>
    )
};

export default Message;