import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import  '../Style/style.css';
function Layout({ header, mainContent, footer }) {    return (
    <Container>
        <Row>
            <Col>{header}</Col>
            <Col></Col>
        </Row>
        <Row>
            <Col></Col>
            <Col>{mainContent}</Col>
            <Col>{footer}</Col>
        </Row>
    </Container>
);
}

Layout.propTypes = {
    header: PropTypes.node.isRequired,
    mainContent: PropTypes.node.isRequired,
    footer: PropTypes.node.isRequired,
};

export default Layout;