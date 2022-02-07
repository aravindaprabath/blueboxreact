import React from 'react';
import './header.scss';
import Button from '../buttons/Button';
// import {PrimaryA, PrimaryB} from "../buttons/Button.stories";

function Header(props) {
    const { userLogged } = props

    let buttonColor = userLogged ? "success" : 'danger'
    let label = userLogged ? 'Hi Username' : 'Click to Login'

    return (
        <header className='headerWrapper'>
            <div>
                {userLogged ? (<p>Hi Aravinda</p>) : (<p>Plase log in</p>)}
            </div>
            <div>
                <Button variant={buttonColor} children={label} />
            </div>

        </header>
    );
}

export default Header;