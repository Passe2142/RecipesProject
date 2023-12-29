import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {Row, Col, Button, Form} from 'react-bootstrap';

function NavBar() {
    return (
            <Navbar bg="light" expand="lg" fixed="top" >
                <Navbar.Brand href="#home">Green Habit</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Recipes</Nav.Link>
                    <Nav.Link href="#home">Vegetarian</Nav.Link>
                    <Nav.Link href="#home">Holidays</Nav.Link>
                    <Nav.Link href="#about">About Me</Nav.Link>

                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Place Holer</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                        Separated link
                        </NavDropdown.Item>
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
                        <Button type="submit">Submit</Button>
                        </Col>
                    </Row>
                    </Form>
            </Navbar>
            );
}

export default NavBar;