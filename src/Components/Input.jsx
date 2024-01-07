import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

function Input({ label, type = 'text', name, className, placeholder, control, errors, children }) {
    return (
        <div>
        <label htmlFor={name}>{label}</label>
        <Controller
            name={name}
            control={control}
            defaultValue=""
            render={({ field }) => (
            <>
                <input {...field} type={type} className={`input ${className}`} placeholder={placeholder} />
                {errors && errors[name]?.type === 'required' && (
                <span className='input-text'>The field is obligatory.</span>
                )}
                {children && children}
            </>
            )}
        />
        </div>
    );
    }

Input.propTypes = {
    label: PropTypes.node.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    control: PropTypes.object.isRequired, // Pass the shared form control instance
    errors: PropTypes.object.isRequired, // Assuming errors is an object
    children: PropTypes.node,
};

export default Input;
