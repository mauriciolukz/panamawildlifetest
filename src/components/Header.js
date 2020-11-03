import React from 'react'
import { Navbar,Nav } from 'react-bootstrap';

export default function Header() {
    return (
        <header className="menu">
            <Navbar bg="none" expand="lg" className="pl-5 border-top remove-padding-top-bottom">
                <Navbar.Brand href="#home"><img className="d-block w-60" src="./img/Leaf Logo White.png" alt="First slide" width='150px' height='50px'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto topnav">
                        {/* <Nav.Link href="#home" >Guias de actividades</Nav.Link>
                        <Nav.Link href="#home">Preguntas frecuentes</Nav.Link>
                        <Nav.Link href="#home">Novedades</Nav.Link>
                        <Nav.Link href="#home">Contacto</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}
