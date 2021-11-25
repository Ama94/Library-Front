import './Card.css';
import KImage from './Ksiazka1.png';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, Button, Row, Col, Image} from "react-bootstrap";
import React from "react";
import {getToken} from "../../Utils/Common";

class KCard extends React.Component {

    constructor(props) {
        super(props);
    }


    handleSubmit=id => (event) => {
        alert('A form was submitted: ' + this.state);

        fetch('http://127.0.0.1:8000/api/book/borrow/' + id, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Origin': '',
                'Host': 'api.producthunt.com',
                'Authorization': 'Bearer ' + getToken()
            },
            // We convert the React state to JSON and send it as the POST body
        }).then(function(response) {

            console.log(response)
            return response.json();
        });

        event.preventDefault();
    }

    render() {
        return (
            <Card className={"news mb-2"}>
                <Row noGutters>
                    <Col md={4} ml={4} mr={4}>
                        <div className={"img-container"}>
                            <Image className={"img-responsive"} src={this.props.coverurl}/>
                        </div>
                    </Col>
                    <Col md={8} ml={8} mr={8}>
                        <Card.Body>
                            <Row className={"justify-content-md-center"}>
                                <Col>
                                    <Card.Title className={"mb-5"}><h1>{this.props.title}</h1></Card.Title>
                                </Col>
                            </Row>
                            <Row className={"justify-content-md-center"}>
                                <Col>
                                    <Card.Text className={"mb-5"}><h2>{this.props.author}</h2></Card.Text>
                                </Col>
                            </Row>
                            <Card.Text>
                                {this.props.description}
                            </Card.Text>
                            <Button onClick={this.handleSubmit(this.props.id)} variant="primary">Wypożycz</Button>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        )
    }
}

export default KCard;