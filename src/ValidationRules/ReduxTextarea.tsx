import React from "react";



const ReduxTextarea = ({input,meta, ...props}: any) => {
    debugger
    return (
        <div>
            <textarea {...input} {...props}/>
        </div>
    );
};

export default ReduxTextarea;
