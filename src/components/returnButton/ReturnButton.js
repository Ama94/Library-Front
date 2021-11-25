import React from "react";
import {getToken} from "../../Utils/Common";
import {Button, Card, Col, Image, Row} from "react-bootstrap";

class ReturnButton extends React.Component {

    constructor(props) {
        super(props);
    }

    handleSubmit=id => (event) => {
        alert('A form was submitted: ' + this.state);

        fetch('http://127.0.0.1:8000/api/book/return/' + id, {
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
            <Button onClick={this.handleSubmit(this.props.id)} variant="primary">Zwróć</Button>
        )
    }
}

export default ReturnButton;