import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Container, Row, Col,} from "react-bootstrap";
import {getToken} from "../../Utils/Common";

class AddForm extends React.Component {
    constructor(props) {
        super(props);
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    handleSubmit = (event) => {
        alert('A form was submitted: ' + this.state);

        fetch('http://127.0.0.1:8000/api/book', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Origin': '',
                'Host': 'api.producthunt.com',
                'Authorization': 'Bearer ' + getToken()
            },
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify(this.state)
        }).then(function(response) {
            console.log(response)
            return response.json();
        });

        event.preventDefault();
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Row  mt={4} mb={4}>
                    <Form.Group controlId="formBasicText">
                        <Form.Control type="Text" placeholder="Tytuł" name="title" onChange={this.handleChange}/>
                    </Form.Group>
                </Row>
                <Row  mt={4} mb={4}>
                    <Form.Group controlId="formBasicText">
                        <Form.Control type="Text" placeholder="Autor" name="author" onChange={this.handleChange}/>
                    </Form.Group>
                </Row>
                <Row  mt={4} mb={4}>
                    <Form.Group controlId="formBasicText">
                        <Form.Control type="Text" placeholder="krótki opis" name="description" onChange={this.handleChange}/>
                    </Form.Group>
                </Row>
                <Row  mt={4} mb={4}>
                    <Form.Group controlId="formBasicText">
                        <Form.Control type="Number" placeholder="wypożyczone" name="borrowed" onChange={this.handleChange}/>
                    </Form.Group>
                </Row>
                <Row  mt={4} mb={4}>
                    <Form.Group controlId="formBasicText">
                        <Form.Control type="Number" placeholder="id_użytkownika" name="userid" onChange={this.handleChange}/>
                    </Form.Group>
                </Row>
                <Row  mt={4} mb={4}>
                    <Form.Group controlId="formBasicText">
                        <Form.Control type="Text" placeholder="URL Okładki" name="coverurl" onChange={this.handleChange}/>
                    </Form.Group>
                </Row>
                <Row className="justify-content-md-center" md={3} mt={4} mb={4}>
                    <Button variant="primary" type="submit" >
                        Dodaj
                    </Button>
                </Row>
            </Form>
        )
    }
}

export default AddForm;