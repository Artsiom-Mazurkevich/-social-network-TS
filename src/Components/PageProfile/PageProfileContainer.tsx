import React, {ComponentType} from 'react';
import s from './PageProfile.module.css';
import PageProfile from "./PageProfile";
import {connect} from "react-redux";
import {getUserProfile, ProfileType } from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/store";
import {Params, useLocation, useParams} from "react-router-dom";
import {isAuthRedirectHoc} from "../../HOC/IsAuthRedirectHOC";


type WithRouterType<T extends string> = { location: Location, params: Readonly<Params<T>> }
type mapStatePropsType = { profile: ProfileType | null, isAuth: boolean }
type mapDispatchPropsType = { getUserProfile: (userId: string) => void }
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
            userID = "23597"
        }
        this.props.getUserProfile(userID)
    }

    render() {
        return <div className={s.profile}>
                <PageProfile profile={this.props.profile}/>
            </div>
    };
}

const WithRouterContainer = WithRouter(PageProfileContainer)

const mapStateToProps = (state: AppStateType): mapStatePropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

export default isAuthRedirectHoc (connect(mapStateToProps, {getUserProfile})(WithRouterContainer))
