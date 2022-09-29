import React from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";

// export const WithRouterHOC_ = <T extends any>(Component: React.ComponentType<T>) => {
//     const WrapperComponent = (props: any) => {
//         const location = useLocation();
//         const navigate = useNavigate();
//         const params = useParams();
//         return (
//             <Component {...props} router={{ location, navigate, params }}/>
//         )
//     }
// }


export function WithRouterHOC <T>(Component: React.ComponentType<T>) {
    const WrapperComponent = (props: any) => {
        const location = useLocation();
        const navigate = useNavigate();
        const params = useParams();
        return (
            <Component {...props} router={{ location, navigate, params }}/>
        )
    }
    return WrapperComponent
    // return <WrapperComponent/>
}

// const WithRouterHOC_New = (Component: React.ComponentClass) => {
//     const WrapperComponentWithRouter = (props: any) => {
//         let location = useLocation();
//         let navigate = useNavigate();
//         let params = useParams();
//         return (
//             <Component
//                 {...props}
//                 router={{ location, navigate, params }}
//             />
//         )
//     }
//     return WrapperComponentWithRouter
// }