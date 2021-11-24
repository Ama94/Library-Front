import './footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "react-bootstrap";
import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer className={"App-Footer"}>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col className={"mt-2"}>
                            <p>Telefon: +48 333 666 999</p>

                            <p>E-mail: <a href="mailto:biblioteka@PHP3.pl" className="footer-a">biblioteka@PHP3.pl</a></p>
                        </Col>
                        <Col className={"col-lg-2 mt-1"}>
                            <a className="footer-a" aria-current="page" href="/main">Strona Główna></a><br/>
                            <a className="footer-a" href="Add">Dodaj></a><br/>
                            <a className="footer-a" href="overdue">Zaległości></a><br/>
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
}

export default Footer;