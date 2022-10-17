import React from 'react';
import s from './PageProfile.module.css';
import PageProfile from "./PageProfile";
import {connect} from "react-redux";
import {getStatusThunk, getUserProfile, ProfileType, updateStatusThunk} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/store";
import {NavigateFunction, Params} from "react-router-dom";
import {isAuthRedirectHoc} from "../../HOC/IsAuthRedirectHOC";
import {compose} from "redux";
import {WithRouterHOC} from "../../HOC/WithRouterHOC";


// type WithRouterType<T extends string> = { location: Location, params: Readonly<Params<T>> }
type mapStatePropsType = { profile: ProfileType | null, isAuth: boolean, status: string, authorizedUserId: number }
type mapDispatchPropsType = {
    getUserProfile: (userId: string) => void
    getStatusThunk: (userId: string) => void
    updateStatusThunk: (status: string) => void
}
type PageProfileContainerPropsType = mapStatePropsType & mapDispatchPropsType

// const WithRouter = (WrapperComponent: ComponentType<any>) => {
//     const WrapperComponentWithRouter = (props: any) => {
//         const location = useLocation();
//         const params = useParams();
//         return (
//             <WrapperComponent
//                 {...props}
//                 navigation={{
//                     location: location,
//                     params: params,
//                 }}
//             />
//         )
//     }
//     return WrapperComponentWithRouter
// }


class PageProfileContainer extends React.Component<PageProfileContainerPropsType & {router:{location: Location, navigate: NavigateFunction, params: Readonly<Params<'userId'>>}}> {

    refreshPage () {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = (this.props.authorizedUserId).toString()
            if (!userId) this.props.router.navigate('/login')
        }
        this.props.getUserProfile(userId)
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
                             isOwner={!this.props.router.params}
                             status={this.props.status}
                             updateStatus={this.props.updateStatusThunk}/>
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
    connect(mapStateToProps, {getUserProfile, getStatusThunk, updateStatusThunk}), WithRouterHOC)(PageProfileContainer)
