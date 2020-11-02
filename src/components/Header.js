import React from 'react'
import { Navbar,Button,Nav,NavDropdown,Form,FormControl,Col,Row,Glyphicon,Container  } from 'react-bootstrap';

export default function Header() {
    return (
        <header className="uno">
            <Navbar bg="none" expand="lg" className="pl-5 border-top remove-padding-top-bottom">
                <Navbar.Brand href="#home"><img className="d-block w-60" src="./img/Leaf Logo White.png" alt="First slide" width='150px' height='50px'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto topnav">
                        <Nav.Link href="#home" >Guias de actividades</Nav.Link>
                        <Nav.Link href="#home">Preguntas frecuentes</Nav.Link>
                        <Nav.Link href="#home">Novedades</Nav.Link>
                        <Nav.Link href="#home">Contacto</Nav.Link>
                    </Nav>
                    {/* <Form>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="4">
                                <FontAwesomeIcon icon={faSearch} size="lg"/>
                                Buscar
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" placeholder="" />
                            </Col>
                        </Form.Group>
                    </Form> */}
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}
