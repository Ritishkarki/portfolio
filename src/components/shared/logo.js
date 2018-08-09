import React from 'react';
import logo from '../../assets/icons/logo.svg';
const imgStyle={
    width:192
};

const Logo = () => (
    <img style={imgStyle} className="logo" src={logo} alt="Ritish Karki"/>
);

export default Logo;