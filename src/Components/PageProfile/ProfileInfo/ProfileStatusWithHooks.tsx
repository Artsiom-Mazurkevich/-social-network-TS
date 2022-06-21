import React, {ChangeEvent, useEffect, useState} from 'react';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}
export const ProfileStatusWithHooks = (props: PropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEditMode(true)
        setStatus(e.currentTarget.value)
    }

    const sendNewStatus = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    return (!editMode
        ?
        <div style={{minHeight: '20px', width: '200px', backgroundColor: 'lightblue'}}>
            <span onDoubleClick={() => {setEditMode(true)}}>{props.status || '-----'}</span>
        </div>
        :
        <div style={{minHeight: '20px', width: '200px', backgroundColor: 'lightblue'}}>
            <input onChange={onStatusChange}
                   onBlur={() => {sendNewStatus()}}
                   autoFocus type="text"
                   value={status}
            />
        </div>)

}

