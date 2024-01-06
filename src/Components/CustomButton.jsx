import PropTypes from 'prop-types';
import '../Style/style.css';
function CustomButton({ variant = 'primary', type = 'button', loading, onClick, children }) {
    return (
        <button
            type={type}
            className={`custom-button ${variant}`}
            disabled={loading}
            onClick={onClick}
        >
            {loading && <span className="loading-spinner" />}
            {children}
        </button>
        );
    }

    CustomButton.propTypes = {
    variant: PropTypes.node.isRequired,
    type: PropTypes.node.isRequired,
    loading: PropTypes.node.isRequired,
    onClick: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,

};
    
    export default CustomButton;