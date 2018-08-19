import React, { Component } from 'react';
import styled from 'styled-components';
export default class ProjectCard extends Component{
    render(){
        const { project, state } = this.props;
        return(
            <Project className={state} backgroundImage ={project.featured_image_src_small} >
                <div className="overlay">
                    <h3>{project.title.rendered}</h3>
                </div>
            </Project>
        );
    }
}
const Project = styled.div`
    width:calc(50% - 10px);
    margin-bottom:20px;
    height:300px;
    display:flex;
    justify-content:center;
    align-items:center;
    -webkit-box-shadow: 2px 2px 10px 5px rgba(160,160,160,0.51);
    -moz-box-shadow: 2px 2px 10px 5px rgba(160,160,160,0.51);
    box-shadow: 2px 2px 10px 5px rgba(160,160,160,0.51);
    background: url(${props => props.backgroundImage});
    background-repeat: no-repeat;
    background-position:0 0;
    background-size:cover;
    position:relative;
    .overlay{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background:rgba(0,0,0,.7);
        color:white;
        text-align:center;
        opacity:0;
        transition: all 200ms ease-in;
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        justify-content:flex-end;
        padding:50px;
        &:hover{
            opacity:1;
            cursor:pointer;
            transition: all 200ms ease-in;
        }
    }
`