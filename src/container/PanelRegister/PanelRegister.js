import Register from "../../components/Register/Register";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Container, Row, Col,} from "react-bootstrap";


class PanelRegister extends React.Component {
    render() {
        return (
            <center>
                <Container className={"justify-content-center mt-5 mb-5"} mt={8} mb={8}>
                    <Row className="justify-content-md-center mt-5 mb-5" md={4} mt={8} mb={8}>
                       <Register></Register>
                    </Row>
                </Container>
            </center>
        )
    }
}

export default PanelRegister;