import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Container, Row, Col,} from "react-bootstrap";

class Login extends React.Component {
    render() {
        return (
            <Form>
                <Row  mt={4} mb={4}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="Email" placeholder="Email" />
                    </Form.Group>
                </Row>
                <Row  mt={4} mb={4}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="Login" placeholder="Login" />
                    </Form.Group>
                </Row>
                <Row  mt={4} mb={4}>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Hasło" />
                    </Form.Group>
                </Row>
                <Row  mt={4} mb={4}>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Potwierdź Hasło" />
                    </Form.Group>
                </Row>
                <Row className="justify-content-md-center" md={2} mt={4} mb={4}>
                    <Button variant="primary" type="submit" >
                        Zarejestruj się
                    </Button>
                </Row>
            </Form>
        )
    }
}

export default Login;