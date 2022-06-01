import React, {FC} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogsDataType, messagesType} from "../../redux/dialogs-reducer";
import {Field, reduxForm} from "redux-form";
import {Button} from "@mantine/core";


type DialogsType = {
    sendMessage: (messageBody: string) => void
    dialogs: dialogsDataType[]
    messages: messagesType[]
    newMessageBody: string
}

const Dialogs: FC<DialogsType> = (props) => {

    const {
        sendMessage,
        dialogs,
        messages,
        newMessageBody,
    } = props

    let Dialogs = dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>);
    let Messages = messages.map(m => <Message key={m.id} titleMessage={m.message} id={m.id}/>);

    const Submit = (values: any) => {
        sendMessage(values.MessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.listDialogs}>
                {Dialogs}
            </div>
            <div className={s.listMessages}>
                <div>{Messages}</div>
                <AddMessageFormRedux onSubmit={Submit}/>
            </div>
        </div>
    );
};


const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'MessageBody'} placeholder={'Enter your message'} />
            </div>
            <div>
                <Button type={'submit'}>Send</Button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'DialogAddMessageForm'})(AddMessageForm)

export default Dialogs;