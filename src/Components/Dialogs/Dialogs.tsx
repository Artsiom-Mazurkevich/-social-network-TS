import React, {ChangeEvent, FC} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogsDataType, messagesType} from "../../redux/dialogs-reducer";


type DialogsType = {
    onChangeNewMessage: (text: string) => void
    sendMessage: () => void
    dialogs: dialogsDataType[]
    messages: messagesType[]
    newMessageBody: string
}

const Dialogs: FC<DialogsType> = (props) => {

    const {
        onChangeNewMessage,
        sendMessage,
        dialogs,
        messages,
        newMessageBody,
    } = props

    let Dialogs = dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>);
    let Messages = messages.map(m => <Message key={m.id} titleMessage={m.message} id={m.id}/>);
    let newMessage = newMessageBody

    const onChangeNewMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let message: string = e.currentTarget.value
        onChangeNewMessage(message)
    }

    const sendMessageHandler = () => {
        sendMessage()
    }
    return (
        <div className={s.dialogs}>
            <div className={s.listDialogs}>
                {Dialogs}
            </div>
            <div className={s.listMessages}>
                <div>{Messages}</div>
                <div>
                    <div><textarea onChange={onChangeNewMessageHandler} placeholder={'Enter your message'}
                                   value={newMessage}/></div>
                    <div>
                        <button onClick={sendMessageHandler}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Dialogs;