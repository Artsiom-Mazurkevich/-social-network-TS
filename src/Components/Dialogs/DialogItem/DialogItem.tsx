import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React, {FC} from "react";

export type DialogItemPropsType = {
    name: string
    id: string
};


const DialogItem: FC<DialogItemPropsType> = ({name,id}) => {
    return (
        <div className={s.dialog}><NavLink to={`/dialogs/${id}`}>{name}</NavLink></div>
    )
};

export default DialogItem;