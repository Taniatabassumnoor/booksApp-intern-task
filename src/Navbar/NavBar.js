import React from 'react';
import {
    Button,
    Container,
    Form,
    FormControl,
    Nav,
    Navbar
} from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import './Navbar.css';
const NavBar = () => {
    const navDesign = {
        color: "white",
    };
    return (
        <div>
            <Navbar fixed="top" bg="dark" expand="lg" className="nav">
                <Container fluid>
                    <Navbar.Brand
                        href="#"
                        className="navStyle logo"
                        style={{ color: "white" }}
                    >
                        BooksApp
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        >
                            <NavLink className="navStyle" activeStyle={navDesign} to="/#">
                                <i className="fas fa-home fs-4"></i>
                            </NavLink>
                            <NavLink
                                className="navStyle"
                                activeStyle={navDesign}
                                to="/#"
                            >
                                <i className="fas fa-bell fs-4"></i>
                            </NavLink>
                            <NavLink className="navStyle" activeStyle={navDesign} to="/#">
                                <i className="fas fa-user-circle fs-4"></i>
                            </NavLink>

                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button style={{ color: "white" }} variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;