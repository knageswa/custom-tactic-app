/* eslint-disable no-undef */
import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import App from "./App";


class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    < Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                        <Navbar.Brand to="/">Fifa 19 Tactics App</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link to="/tactics">Tactics</Nav.Link>
                                <Nav.Link to="/videos">Videos</Nav.Link>
                                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">Log in</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/tactics" component={App} />
                        <Route path="/videos" component={App} />
                    </div>
                </div>
            </HashRouter >
        )
    }
}

export default Main;