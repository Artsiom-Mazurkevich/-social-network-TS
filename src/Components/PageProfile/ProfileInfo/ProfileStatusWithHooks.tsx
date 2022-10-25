import React, {ChangeEvent, useEffect, useState} from 'react';
import {Input, Text} from "@mantine/core";

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
            <div>
                <Text color={props.status ? 'blue' : 'dimmed'} onDoubleClick={() => {
                    setEditMode(true)
                }}>{props.status || 'You have no status'}</Text>
            </div>
            :
                <Input onChange={onStatusChange}
                       style={{maxWidth: '400px'}}
                       onBlur={() => {sendNewStatus()}}
                       autoFocus
                       type="text"
                       value={status}
                />
    )

}

