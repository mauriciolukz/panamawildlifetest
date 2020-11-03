import React from 'react'
import { Navbar } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { ButtonGroup,Button } from 'react-bootstrap';

export default function Header() {
    return (
        <header className="menu">
            <Navbar bg="none" expand="lg" className="pl-5 border-top remove-padding-top-bottom">
                <Navbar.Brand href="#home"><img className="d-block w-60" src="./img/Leaf Logo White.png" alt="First slide" width='150px' height='50px'/></Navbar.Brand>
                <div className="rightCheck"><BootstrapSwitchButton checked={true} size="xs" onlabel='EN' offlabel='ES' checked={false} onstyle="success" offstyle="info"/></div>
                <ButtonGroup vertical className="floatBotton">
                    <Button className="mt-1 colorF" variant="secondary"> 1 </Button>
                    <Button className="mt-1 colorF"> 2 </Button>
                    <Button className="mt-1 colorF"> 3 </Button>
                </ButtonGroup>
            </Navbar>
        </header>
    )
}
