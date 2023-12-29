import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
function Layout({ header, mainContent, footer }) {    return (
    <Container>
        <Row>
            <Col>{header}</Col>
            <Col>2 of 2</Col>
        </Row>
        <Row>
            <Col>1 of 3</Col>
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