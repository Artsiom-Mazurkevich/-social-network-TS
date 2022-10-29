import React from 'react';
import s from './PageProfile.module.css';
import PageProfile from "./PageProfile";
import {connect} from "react-redux";
import {
    getStatusThunk,
    getUserProfileThunk,
    ProfileType,
    setProfilePhotoThunk, updateProfileThunk,
    updateStatusThunk
} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/store";
import {NavigateFunction, Params} from "react-router-dom";
import {isAuthRedirectHoc} from "../../HOC/IsAuthRedirectHOC";
import {compose} from "redux";
import {WithRouterHOC} from "../../HOC/WithRouterHOC";


type mapStatePropsType = { profile: ProfileType | null, isAuth: boolean, status: string, authorizedUserId: number }
type mapDispatchPropsType = {
    getUserProfileThunk: (userId: string) => void
    getStatusThunk: (userId: string) => void
    updateStatusThunk: (status: string) => void
    setProfilePhotoThunk: (photo: any) => void
    updateProfileThunk: (profile: ProfileType) => void
}
type PageProfileContainerPropsType = mapStatePropsType & mapDispatchPropsType



class PageProfileContainer extends React.Component<PageProfileContainerPropsType & {router:{location: Location, navigate: NavigateFunction, params: Readonly<Params<'userId'>>}}> {

    refreshPage () {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = (this.props.authorizedUserId).toString()
            if (!userId) this.props.router.navigate('/login')
        }
        this.props.getUserProfileThunk(userId)
        this.props.getStatusThunk(userId)
    }

    componentDidMount() {
        this.refreshPage()
    }
   componentDidUpdate(prevProps: Readonly<PageProfileContainerPropsType & { router: { location: Location; navigate: NavigateFunction; params: Readonly<Params<"userId">> } }>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.router.params.userId !== prevProps.router.params.userId) this.refreshPage()
   }


    render() {
        return (
            <div className={s.profile}>
                <PageProfile profile={this.props.profile}
                             isOwner={!this.props.router.params.userId}
                             status={this.props.status}
                             updateStatus={this.props.updateStatusThunk}
                             setProfilePhoto={this.props.setProfilePhotoThunk}
                             updateProfile={this.props.updateProfileThunk}
                />
            </div>
        )
    };
}


const mapStateToProps = (state: AppStateType): mapStatePropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
})



export default compose<React.ComponentType>(
    isAuthRedirectHoc,
    connect(mapStateToProps, {getUserProfileThunk, getStatusThunk, updateStatusThunk, setProfilePhotoThunk, updateProfileThunk}), WithRouterHOC)(PageProfileContainer)
