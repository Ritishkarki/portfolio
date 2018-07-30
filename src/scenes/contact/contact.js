import React, { Component } from 'react';
import styled from 'styled-components';

class Contact extends Component{
    render(){
        return(
            <Wrapper>
                <h1> Contact Component </h1>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    width:100%;
    height:100vh;
    background:red;
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    left:0;
    top:0;
    z-index:2;
`;

export default Contact;