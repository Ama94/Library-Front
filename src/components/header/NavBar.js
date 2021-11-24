import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import {Nav, NavLink, Navbar} from "react-bootstrap";

class NavBar extends React.Component {
    render() {
        return (
            <Navbar expand="lg App-navbar">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="App-nav">
                        <NavLink href={'/'}>Strona Główna</NavLink>
                        <NavLink href={'/add'}>Dodaj</NavLink>
                        <NavLink className={"last-link"} href={'/overdue'}>Zaległe</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar;