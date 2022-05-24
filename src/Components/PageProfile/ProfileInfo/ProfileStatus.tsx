import React from 'react';

type PropsType = {
    status: string
}


export class ProfileStatus extends React.Component<PropsType> {

    state = {
        editMode: false
    }

    setEditMode () {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode () {
        this.setState({
            editMode: false
        })
    }

    render() {
        return <>
            {!this.state.editMode
                ? <div><span onDoubleClick={() => {this.setEditMode()} }>{this.props.status}</span></div>
                : <div>
                    <input onBlur={ () => {this.deactivateEditMode()} } autoFocus type="text" value={this.props.status}/>
                </div>
            }
        </>
    }
};

