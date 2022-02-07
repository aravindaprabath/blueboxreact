import React from 'react';
import './Button.scss';
import PropTypes from "prop-types";

function Button(props) {

    //props
    const { variant, children, fullWidthButton, ...rest } = props

    // conditional styles
    const fullWidth = fullWidthButton ? 'buttonFullWidth' : 'buttonNormalWidth'

    //components
    return (
        <button className={[`button ${variant}`, fullWidth].join(' ')} {...rest}>
            {children}
        </button>
    )
}

Button.propTypes= {
    children:PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger']).isRequired,
    fullWidthButton : PropTypes.bool,
}

Button.defaultProps = {
    children:'Hello Button',
    variant:'primary',
    fullWidthButton: false
}

export default Button;
