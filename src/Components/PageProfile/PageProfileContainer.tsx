import React, {ComponentType, FC} from 'react';
import s from './PageProfile.module.css';
import PageProfile from "./PageProfile";
import axios from "axios";
import {connect} from "react-redux";
import { ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/store";
import {Params, useLocation, useParams} from "react-router-dom";



type WithRouterType<T extends string> = {
    location:  Location
    params:  Readonly<Params<T>>
}
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

type mapStatePropsType = {
    profile: ProfileType | null
}

type mapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type PageProfileContainerPropsType = mapStatePropsType & mapDispatchPropsType


class PageProfileContainer extends React.Component<PageProfileContainerPropsType & {navigation: WithRouterType<'userID'> }> {
    componentDidMount() {
        let userID = this.props.navigation.params.userID
        if (!userID) {
            userID = '23597'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (<div className={s.profile}>
                <PageProfile {...this.props} profile={this.props.profile}/>
            </div>
        )
    };
}

// const PageProfileContainer: FC<PageProfileContainerPropsType> = ({profile,setUserProfile}) => {
//
//     const location = useLocation();
//     console.log(location.pathname)
//
//
//     const componentDidMount = () => {
//       return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/23492`).then(response => {
//             setUserProfile(response.data)
//         })
//     } ////////???
//
//         return (<div className={s.profile}>
//                 <PageProfile {...store} profile={profile}/>
//             </div>
//         )
//
// };

const WithRouterContainer = WithRouter(PageProfileContainer)

const mapStateToProps = (state: AppStateType): mapStatePropsType => ({profile: state.profilePage.profile})

export default connect(mapStateToProps, {setUserProfile})(WithRouterContainer)
