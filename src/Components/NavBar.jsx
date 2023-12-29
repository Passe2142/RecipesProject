import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import {Row, Col, Button, Form} from 'react-bootstrap';
import  '../Style/navStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
function NavBar() {
    return (
            <Navbar className="custom-navbar" expand="lg" fixed="top" >
                <Container>
                    <Navbar.Brand href="#home">Green Habit</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Recipes</Nav.Link>
                        <Nav.Link href="#home">Categories</Nav.Link>
                        <Nav.Link href="#home">Holidays</Nav.Link>
                        <Nav.Link href="#about">About Me</Nav.Link>

                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Place Holer</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Form inline>
                    <Row>
                        <Col xs="auto">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className=" mr-sm-2"
                        />
                        </Col>
                        <Col xs="auto">
                        <Button type="submit"> <FontAwesomeIcon icon={faLeaf} />Search</Button>
                        </Col>
                    </Row>
                    </Form>
                </Container>
            </Navbar>
            );
}

export default NavBar;