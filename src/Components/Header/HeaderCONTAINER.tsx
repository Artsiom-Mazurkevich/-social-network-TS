import React from 'react';
import Header from "./Header";
import {AppStateType} from "../../redux/store";
import {connect} from "react-redux";
import {DataAuthType, setAuthUserData} from "../../redux/auth-reducer";
import axios from "axios";


type mapDispatchPropsType = {
    setAuthUserData: (data: DataAuthType) => void
}

class HeaderContainer extends React.Component<{dataAuth: DataAuthType} & mapDispatchPropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true}).then((response) => {
            if (response.data.resultCode === 0) {
                const data = response.data.data
                this.props.setAuthUserData(data)
            }
        })
    }

    render() {
        return <Header isAuthData={this.props.dataAuth.isAuth} login={this.props.dataAuth.login}/>
    }
};



const mapStateToProps = (state: AppStateType):{dataAuth: DataAuthType} => ({dataAuth: state.auth})


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)



