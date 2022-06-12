import React from 'react';
import Header from "./Header";
import {AppStateType} from "../../redux/store";
import {connect} from "react-redux";
import {DataAuthType,logoutTC} from "../../redux/auth-reducer";



type mapDispatchPropsType = {
    logoutTC: () => void
}

class HeaderContainer extends React.Component<{dataAuth: DataAuthType} & mapDispatchPropsType> {

    render() {
        return <Header isAuthData={this.props.dataAuth.isAuth} login={this.props.dataAuth.login} logout={this.props.logoutTC}/>
    }
};



const mapStateToProps = (state: AppStateType):{dataAuth: DataAuthType} => ({dataAuth: state.auth})


export default connect(mapStateToProps, {logoutTC})(HeaderContainer)



