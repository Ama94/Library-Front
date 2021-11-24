import Card from "../../components/Card/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Container, Row} from "react-bootstrap";
import {getToken} from "../../Utils/Common";

let obj = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Origin': '',
        'Host': 'api.producthunt.com',
        'Authorization': 'Bearer ' + getToken()
    },
}

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }


    componentDidMount() {
        fetch("http://127.0.0.1:8000/api/books" , obj)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }

            )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>{error.message}</div>;
        }else if (!isLoaded) {
            return <div>Ladowanie...</div>
        }
        return (
            <center>
                <Container className={"justify-content-center"} mt={2} mb={2}>
                    <Row className="justify-content-md-center" md={4} mt={8} mb={8}>
                            {items.map(item => (
                                    <Card
                                        id={item.id}
                                        coverurl={item.coverurl}
                                        title={item.title}
                                        author={item.author}
                                        description={item.description}
                                    ></Card>
                            ))}
                    </Row>
                </Container>
            </center>
        )
    }
}

export default Main;
