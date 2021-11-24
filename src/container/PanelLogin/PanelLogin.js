import Login from "../../components/login/login";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Container, Row, Col,} from "react-bootstrap";


class PanelLogin extends React.Component {
    render() {
        return (
            <center>
                <Container className={"justify-content-center mt-5 mb-5"} mt={2} mb={2}>
                    <Row className="justify-content-md-center mt-5 mb-5" md={4}>
                        <Login></Login>
                    </Row>
                </Container>
            </center>
        )
    }
}

export default PanelLogin;