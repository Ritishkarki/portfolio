import React, { Component } from 'react';
import styled from 'styled-components';

class Projects extends Component{
    render(){
        return(
            <Wrapper>
                <h1> Projects Component </h1>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    width:100%;
    height:100vh;
    background:pink;
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    left:0;
    top:0;
    z-index:2;
`;

export default Projects;