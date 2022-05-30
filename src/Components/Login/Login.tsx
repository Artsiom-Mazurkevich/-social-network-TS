import React from 'react';
import {Button, Container, Input, Paper} from "@mantine/core";
import {Field, reduxForm} from "redux-form";

export const Login = () => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }
  return <ReduxLoginForm onSubmit={onSubmit}/>
}


const LoginForm = (props: any) => {
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
                        <Field type={'checkbox'} name={'remember me'} placeholder={'remember me'} component={'input'}/>
                    </div>
                    <div>
                        <Button type={'submit'} fullWidth>login</Button>
                    </div>
                </form>
        </Paper>
        </Container>
    );
};

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)


