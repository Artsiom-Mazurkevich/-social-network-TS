import React, {FC} from 'react';
import {Button, Container, Paper} from "@mantine/core";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../ValidationRules/ReduxTextarea";
import {requiredField} from "../../ValidationRules/validation";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../../redux/store";


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
type mapDispatchToPropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean) => void
}
type mapStateToPropsType = {
    isAuth: boolean
}

const Login: FC<mapDispatchToPropsType & mapStateToPropsType> = ({loginTC, isAuth}) => {
    const onSubmit = (formData: FormDataType) => {

        loginTC(formData.email, formData.password, formData.rememberMe)
        console.log(formData)
    }
    return isAuth ? <Navigate to={'/profile'}/> : <ReduxLoginForm onSubmit={onSubmit}/>
    /*return <ReduxLoginForm onSubmit={onSubmit}/>*/
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <Container size={420} my={40}>
            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <form onSubmit={props.handleSubmit}>
                    <div>
                        <Field
                            placeholder={'Email'}
                            validate={[requiredField]}
                            name={'email'}
                            component={Input}
                        />
                    </div>
                    <div>
                        <Field
                            placeholder={'Password'}
                            validate={[requiredField]}
                            type={'password'}
                            name={'password'}
                            component={Input}/>
                    </div>
                    <div>
                        <Field
                            type={'checkbox'}
                            name={'rememberMe'}
                            placeholder={'rememberMe'}
                            component={Input}/>
                    </div>
                    <div>
                        <Button type={'submit'} fullWidth>login</Button>
                    </div>
                </form>
        </Paper>
        </Container>
    );
};

const ReduxLoginForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const mapStateToProps = (state: AppStateType) => ({isAuth: state.auth.isAuth})
export default connect(mapStateToProps, {loginTC})(Login)