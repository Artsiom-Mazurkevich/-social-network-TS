import React from 'react';
import {Button, Container, Paper} from "@mantine/core";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
  return <ReduxLoginForm onSubmit={onSubmit}/>
}


type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <Container size={420} my={40}>
            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <form onSubmit={props.handleSubmit}>
                    <div>
                        <Field placeholder={'Login'} name={'login'} component={'input'}/>
                    </div>
                    <div>
                        <Field placeholder={'Password'} name={'password'} component={'input'}/>
                    </div>
                    <div>
                        <Field type={'checkbox'} name={'rememberMe'} placeholder={'rememberMe'} component={'input'}/>
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


