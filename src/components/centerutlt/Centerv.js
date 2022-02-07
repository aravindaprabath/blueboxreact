import React from 'react';
import './centerv.scss'

function Centerv(props) {
    const {children} = props
    return (
        <div className='centerv'>
            {children}
        </div>
    );
}

export default Centerv;