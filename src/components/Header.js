import React from 'react'
import { Navbar } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

export default function Header() {
    return (
        <header className="menu">
            <Navbar bg="none" expand="lg" className="pl-5 border-top remove-padding-top-bottom">
                <Navbar.Brand href="#home"><img className="d-block w-60" src="./img/Leaf Logo White.png" alt="First slide" width='150px' height='50px'/></Navbar.Brand>
                <div className="rightCheck"><BootstrapSwitchButton checked={true} size="xs" onlabel='EN' offlabel='ES' checked={false} onstyle="success" offstyle="info"/></div>
            </Navbar>
        </header>
    )
}
