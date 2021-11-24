import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row} from "react-bootstrap";
import React from "react";
import NavBar from "./NavBar";

class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
                <div className="App-nav">
                    <Container>
                        <Row className="justify-content-md-center">
                            <NavBar></NavBar>
                        </Row>
                    </Container>
                </div>
            </header>
        )
    }
}

export default Header;