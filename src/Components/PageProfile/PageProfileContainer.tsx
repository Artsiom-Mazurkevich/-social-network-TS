import React from 'react';
import s from './PageProfile.module.css';
import PageProfile from "./PageProfile";
import axios from "axios";
import {connect} from "react-redux";
import {profilePageType, setUserProfile} from "../../redux/profile-reducer";
import {StateUsersType} from "../../redux/users-reduser";
import {AppStateType} from "../../redux/store";


class PageProfileContainer extends React.Component <profilePageType & {}> {

    componentDidMount() {
        axios.get<StateUsersType>(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            debugger
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (<div className={s.profile}>
                <PageProfile/>
            </div>
        )
    };
};

const mapStateToProps = (state: AppStateType) => ({profile: state.profilePage.profile})

export default connect(mapStateToProps, {setUserProfile}) (PageProfileContainer)
