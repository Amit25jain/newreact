import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './favicon.ico';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faInfo, faCompress, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { MDBIcon } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { SocialIcon } from 'react-social-icons';
const information =
{
    firstfont: <FontAwesomeIcon icon={faHome} />,
    secondfont: <FontAwesomeIcon icon={faInfoCircle} />,
    thirdfont: <FontAwesomeIcon icon={faInfo} />,
    fourfont: <MDBIcon icon="map-marked-alt" />,
    fivefont: <FontAwesomeIcon icon={faCompress} />,
    sixfont: <FontAwesomeIcon icon={faUserAlt} />,
    twifontsocial: <SocialIcon style={{ width: '30px', height: '20px' }} className="App-logo" url="http://twitter.com/jaketrent" />,
    facefontsocial: <SocialIcon style={{ width: '30px', height: '20px' }} className="App-logo" url="http://facebook.com/jaketrent" />,
    instfontsocial: <SocialIcon style={{ width: '30px', height: '20px' }} className="App-logo" url="http://instagram.com/jaketrent" />,
    whatfontsocial: <SocialIcon style={{ width: '30px', height: '20px' }} className="App-logo" url="http://whatsapp.com/jaketrent" />
}
class Menu extends React.Component {
    render() {
        return (
            <>
                <Nav defaultActiveKey="/home" as="ul" style={{ backgroundColor: 'black' }}>
                    <Nav.Item as="li">
                        <Nav.Link href="/home">7894561235</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-1">info@gmail.com</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-2">12045678945</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="ml-auto d-flex">
                        <Nav.Item as="li">
                            <Nav.Link eventKey="link-2">{information.twifontsocial}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" >
                            <Nav.Link eventKey="link-2">{information.facefontsocial}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" >
                            <Nav.Link eventKey="link-2">{information.instfontsocial}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" >
                            <Nav.Link eventKey="link-2">{information.whatfontsocial}</Nav.Link>
                        </Nav.Item>
                    </Nav.Item>
                </Nav>


                <Navbar collapseOnSelect expand="lg" variant="" style={{ backgroundColor: 'darkred' }}>
                    <Navbar.Brand href="#home" className=""><img src={Logo} className="App-logo" /></Navbar.Brand>
                    <Navbar.Brand href="#home" className="text-light font-weight-bold font-italic">Smart Card</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-dark toggle" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="">
                        <Nav className="ml-auto font-weight-bold">
                            <Nav.Link href="#features" className="navs">{information.firstfont} Home</Nav.Link>
                            <Nav.Link href="#pricing" className="navs">{information.secondfont} About us</Nav.Link>
                            <Nav.Link href="#pricing" className="navs">{information.thirdfont} Services</Nav.Link>
                            <NavDropdown className="navs" title="Projects" id="collasible-nav-dropdown" >
                                <NavDropdown.Item href="#action/3.1">Project 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Project 2</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Project 3</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Project --</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#deets" className="navs">{information.fivefont} Carrer</Nav.Link>

                            <Nav.Link href="#deets" className="navs">{information.fourfont} Contact us</Nav.Link>

                            <div class="dropdown navs">
                                <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {information.sixfont} 
                              </button>
                                <div class="dropdown-menu" style={{ marginLeft:'-147px' }} aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Create Account</a>
                                    <a class="dropdown-item" href="#">Login Account</a>
                                    <a class="dropdown-item" href="#">Online Smart Card </a>
                                </div>
                            </div>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}
export default Menu;