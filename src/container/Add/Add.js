import AddForm from "../../components/AddForm/AddForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Container, Row} from "react-bootstrap";


class Add extends React.Component {
    render() {
        return (
            <center>
                <Container className={"justify-content-center"} mt={2} mb={2}>
                    <Row className="justify-content-md-center mt-5 mb-5" md={4}>
                       <AddForm></AddForm>
                    </Row>
                </Container>
            </center>
        )
    }
}

export default Add;