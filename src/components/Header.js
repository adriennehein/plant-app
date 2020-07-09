import React from 'react';

{/*stateless, functional component*/}

const Header = props => (
    <header>
        <h1>{props.greenhouseName}</h1>
    </header>
)

export default Header;