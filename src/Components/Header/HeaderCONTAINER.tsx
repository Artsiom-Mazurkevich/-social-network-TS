import React from 'react';
import Header from "./Header";
import {AppStateType} from "../../redux/store";
import {connect} from "react-redux";
import {DataAuthType, getAuthUserDataThunkCreator, logoutTC} from "../../redux/auth-reducer";



type mapDispatchPropsType = {
    getAuthUserDataThunkCreator: () => void
    logoutTC: () => void
}

class HeaderContainer extends React.Component<{dataAuth: DataAuthType} & mapDispatchPropsType> {
    componentDidMount() {
        this.props.getAuthUserDataThunkCreator()
        /*authAPI.me().then((data) => this.props.setAuthUserData(data));*/
        // axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true}).then((response) => {
        //     if (response.data.resultCode === 0) {
        //         const data = response.data.data
        //         this.props.setAuthUserData(data)
        //     }
        // })
    }

    render() {
        return <Header isAuthData={this.props.dataAuth.isAuth} login={this.props.dataAuth.login} logout={this.props.logoutTC}/>
    }
};



const mapStateToProps = (state: AppStateType):{dataAuth: DataAuthType} => ({dataAuth: state.auth})


export default connect(mapStateToProps, {getAuthUserDataThunkCreator, logoutTC})(HeaderContainer)



