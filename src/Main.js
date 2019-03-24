/* eslint-disable no-undef */
import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

import {
    Route,
    Link,
    BrowserRouter
} from "react-router-dom";
import Home from "./Container/Home";
import App from "./App";
import Footer from "./footer";
import "react-bootstrap/dist/react-bootstrap.min.js";
import VideoContainer from "./Container/VideoContainer";


class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    < Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                        <Navbar.Brand><Link className="navbar-brand"  to="/">Fifa 19 Tactics App</Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <LinkContainer to="/tactics"><Nav.Link >Tactics</Nav.Link></LinkContainer>
                                <LinkContainer to="/videos"><Nav.Link >Videos</Nav.Link></LinkContainer>
                                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown> */}
                            </Nav>
                            <Nav>
                                <LinkContainer to="/login"><Nav.Link >Login</Nav.Link></LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                 {/* <Footer>{Footer}</Footer> */}
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/tactics" component={App} />
                        <Route path="/videos" component={VideoContainer} />
                    </div>

                    
                    
                </div>
            </BrowserRouter >
        )
    }
}

export default Main;