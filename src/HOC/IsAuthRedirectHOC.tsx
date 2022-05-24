import React, {ComponentType} from 'react';
import { Navigate } from 'react-router-dom';
import {connect} from "react-redux";
import {AppStateType} from "../redux/store";


type mapStateToPropsType = {isAuth: boolean}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {isAuth: state.auth.isAuth}
}



export function isAuthRedirectHoc <T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: mapStateToPropsType) => {
        const {isAuth, ...restProps} = props
        return !isAuth ? <Navigate to={'/login'}/> : <Component{...restProps as T}/>
    }
    return connect(mapStateToProps)(RedirectComponent)
    /*const ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent*/
};

