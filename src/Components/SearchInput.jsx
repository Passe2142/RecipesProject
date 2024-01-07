import PropTypes from 'prop-types';
import Input from './Input';

function SearchInput({ placeholder, control, children }) {
    return (
        <Input
        type="text"
        name="search-input"
        placeholder={placeholder}
        control={control}
        className="search-bar"
        >
            {children}
        </Input>
        );
}
SearchInput.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    control: PropTypes.object.isRequired, 
    children: PropTypes.node,
};
export default SearchInput;