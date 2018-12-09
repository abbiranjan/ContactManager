import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGrp= (
    {
    id,
    label,
    name,
    value,
    placeholder,
    type,
    error,
    onChange}= this.props
)=>{
    return(
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                name={name}
                id={id}
                value={value}
                className={classnames('form-control form-control-lg', 
                                        {'is-invalid': error})}
                placeholder={placeholder}
                onChange={onChange}
            />
            {error && <div className="invalid-feedback">
                                      {error}</div>}
        </div>
    )
}

TextInputGrp.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
TextInputGrp.defaultProps = {
    type: 'text'
}
export default TextInputGrp;