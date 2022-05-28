import React, {ChangeEvent} from 'react';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}


export class ProfileStatus extends React.Component<PropsType> {
    state = {
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
        this.props.updateStatus(this.props.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
        console.log(e.currentTarget.value)
    }

    render() {
        return !this.state.editMode
                ? <div style={{width: '50px', height: '20px', backgroundColor: 'blue'}}><span onDoubleClick={() => {this.setEditMode()} }>--{this.props.status}--</span></div>
                : <div style={{width: '50px', height: '20px', backgroundColor: 'blue'}}>
                    <input onChange={this.onStatusChange} onBlur={ () => {this.deactivateEditMode()} } autoFocus type="text" value={this.state.status}/>
                </div>


    }
};

