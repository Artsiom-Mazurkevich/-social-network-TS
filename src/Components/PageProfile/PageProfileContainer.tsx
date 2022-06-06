import React, {ComponentType} from 'react';
import s from './PageProfile.module.css';
import PageProfile from "./PageProfile";
import {connect} from "react-redux";
import {getStatusThunk, getUserProfile, ProfileType, updateStatusThunk} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/store";
import {Params, useLocation, useParams} from "react-router-dom";
import {isAuthRedirectHoc} from "../../HOC/IsAuthRedirectHOC";
import {compose} from "redux";


type WithRouterType<T extends string> = { location: Location, params: Readonly<Params<T>> }
type mapStatePropsType = { profile: ProfileType | null, isAuth: boolean, status: string, authorizedUserid: any}
type mapDispatchPropsType = {
    getUserProfile: (userId: string) => void
    getStatusThunk: (userId: string) => void
    updateStatusThunk: (status: string) => void
}
type PageProfileContainerPropsType = mapStatePropsType & mapDispatchPropsType

const WithRouter = (WrapperComponent: ComponentType<any>) => {
    const WrapperComponentWithRouter = (props: any) => {
        const location = useLocation();
        const params = useParams();
        return (
            <WrapperComponent
                {...props}
                navigation={{
                    location: location,
                    params: params
                }}
            />
        )
    }
    return WrapperComponentWithRouter
}


class PageProfileContainer extends React.Component<PageProfileContainerPropsType & { navigation: WithRouterType<'userID'> }> {
    componentDidMount() {
        let userID = this.props.navigation.params.userID
        if (!userID) {
            userID = this.props.authorizedUserid
        }
        if (typeof userID === "string") {
            this.props.getUserProfile(userID)
        }
        if (typeof userID === "string") {
            this.props.getStatusThunk(userID)
        }
    }

    render() {
        return <div className={s.profile}>
                <PageProfile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatusThunk}/>
            </div>
    };
}

// const WithRouterContainer = WithRouter(PageProfileContainer)

const mapStateToProps = (state: AppStateType): mapStatePropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    authorizedUserid: state.auth.id,

})

// export default isAuthRedirectHoc (connect(mapStateToProps, {getUserProfile})(WithRouterContainer))


export default compose<React.ComponentType>(
    isAuthRedirectHoc,
    connect(mapStateToProps, {getUserProfile, getStatusThunk, updateStatusThunk}),
    WithRouter
)(PageProfileContainer)
