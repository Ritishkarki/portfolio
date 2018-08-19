import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
const imgStyle={
    width:192
};

const Logo = () => (
    <NavLink exact activeClassName="active" to="/"><img style={imgStyle} className="logo" src={logo} alt="Ritish Karki"/></NavLink>
);

export default Logo;