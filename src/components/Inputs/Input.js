import React from 'react';
import './Input.css';

function Input(props) {
    const { inputSize = 'inputSmall', labelText = 'Sample' } = props;

    return <div>
        <label htmlFor=""> {labelText}</label>
        <input className={`input ${inputSize}`} type="text" />
    </div>;
}

export default Input;
