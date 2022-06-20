import React, {ComponentType} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";

const WithRouterHOC = (Component: ComponentType<any>) => {
    const WrapperComponentWithRouter = (props: any) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        )
    }
    return WrapperComponentWithRouter
}