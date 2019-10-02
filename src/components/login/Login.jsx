import React, { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button, Form, FormGroup, Label, Card, Container, Col, Row, CardHeader, CardBody } from 'reactstrap';
import useGenericInput from './../../hooks/useGenericInput'
import { loginActionsAsyncCreator } from './../../store/modules/auth/login.action';

const Login = (props) => {
    const dispatch = useDispatch();
    //const jwt = useSelector(store => store.auth.login.data);
    const email = useGenericInput('', 'email');
    const password = useGenericInput('', 'password');

    const buttonIsDisabled = () => password.value === '' || email.value === '';
/*
    useEffect(() => {
        if (jwt !== null) {
            props.history.push('dashboard/users')
        }
    }, [jwt])
    */
    
    return (
        <Container className="mt-4">
            <Row>
                <Col>
                    <Card>
                        <CardHeader>Login</CardHeader>
                        <CardBody>
                            <Form>
                                <pre className="text-left">
                                </pre>
                                <FormGroup>
                                    <Label>Email</Label>
                                    <Input {...email} />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Password</Label>
                                    <Input {...password} />
                                </FormGroup>
                                <Button
                                    disabled={buttonIsDisabled()}
                                    onClick={() => dispatch(loginActionsAsyncCreator(email.value, password.value))}
                                >Login</Button>
                            </Form></CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>

    );
} 

export default Login;