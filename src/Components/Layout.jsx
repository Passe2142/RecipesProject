import PropTypes from 'prop-types';
import '../Style/style.css';

function Layout({ header, mainContent, footer }) {
    return (
    <div className="container">
        <div className="row">
        <div className="col">{header}</div>
        </div>
        <div className="row">
        <div className="col main-content">{mainContent}</div>
        </div>
        <div className="row">
        <div className="col">{footer}</div>
        </div>
    </div>
    );
}

Layout.propTypes = {
    header: PropTypes.node.isRequired,
    mainContent: PropTypes.node.isRequired,
    footer: PropTypes.node.isRequired,
};

export default Layout;
