import React, {ChangeEvent} from 'react';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}
type LocalStateType = {
    editMode: boolean
    status: string
}

export class ProfileStatus extends React.Component<PropsType> {
    state: LocalStateType = {
        editMode: false,
        status: this.props.status
    }

    setEditMode () {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate = (prevProps: PropsType, prevState: LocalStateType) => {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return !this.state.editMode
                ? <div><span onDoubleClick={() => {this.setEditMode()} }>{this.props.status || '-----'}</span></div>
                : <div>
                    <input onChange={this.onStatusChange} onBlur={ () => {this.deactivateEditMode()} } autoFocus type="text" value={this.state.status}/>
                </div>
    }
}

