import React from 'react';
import s from './PageProfile.module.css';
import PageProfile from "./PageProfile";
import axios from "axios";
import {connect} from "react-redux";
import { ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/store";



type mapStatePropsType = {
    profile: ProfileType | null
}

type mapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type PageProfileContainerPropsType = mapStatePropsType & mapDispatchPropsType


class PageProfileContainer extends React.Component <PageProfileContainerPropsType> {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/23492`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (<div className={s.profile}>
                <PageProfile {...this.props} profile={this.props.profile}/>
            </div>
        )
    };
};

const mapStateToProps = (state: AppStateType): mapStatePropsType => ({profile: state.profilePage.profile})

export default connect(mapStateToProps, {setUserProfile}) (PageProfileContainer)
