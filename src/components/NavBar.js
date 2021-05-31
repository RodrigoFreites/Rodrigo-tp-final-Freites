import React from 'react'
import {Navbar,Nav, NavDropdown} from 'react-bootstrap'

export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">RF - Gaming Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Novedades</Nav.Link>
                        <Nav.Link href="#pricing">Ofertas</Nav.Link>
                        <NavDropdown title="Productos" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Teclados</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Mouse</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Monitores</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Auriculares</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Componentes</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
}