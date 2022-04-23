import React, {ChangeEvent, FC} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogsDataType} from "../../redux/profile-reducer";
import {messagesType} from "../../redux/dialogs-reducer";



type dialogsType = {
    onChangeNewMessage: (text: string) => void
    sendMessage: () => void
    dialogs: dialogsDataType[]
    messages: messagesType[]
    newMessageBody: string
}

const Dialogs: FC<dialogsType> = ({onChangeNewMessage, sendMessage, dialogs, messages, newMessageBody}) => {

    let Dialogs = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let Messages = messages.map(m => <Message titleMessage={m.message} id={m.id}/>);
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