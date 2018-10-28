import React, { Component } from 'react';
import Burger from './burger';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export default class NavBar extends Component{
    constructor(props){
        super(props)
        this.state={
            isOpen : false
        }
    }
    componentDidMount(){

    }
    render(){
        const {routes} = this.props;
        return(
            <Navbar className={this.state.isOpen ? 'open' :''}>
                <span onClick={() =>{this.setState({isOpen: !this.state.isOpen})}}>
                    <Burger isOpen = {this.state.isOpen}/>
                </span>
                {this.state.isOpen && routes.length >0 &&
                    <ul>
                        {
                            routes.map(({ showInMenu, path, key }) => {
                                return showInMenu && (
                                    <Link  onClick={(e) => {this.setState({isOpen:false})}} to={path} key={`link-${key}`}>{key}</Link>
                                )
                            })
                        }
                    </ul>
                }
            </Navbar>
        )
    }
}
const Link = props => (
    <li>
      <NavLink exact activeClassName="active"  {...props}  />
    </li>
);

const Navbar = styled.div`
    position:fixed;
    right:0;
    top:0;
    z-index:20;
    height:100px;
    width:100px;
    border-bottom-left-radius:100%;
    transition: all 0.4s;
    &.open{
        width:400px;
        height:400px;
        background: #1565ea;
    }
    .burger-icon{
        margin-top:5vh;
        margin-right:5vh;
    }
    ul{
        width:200px;
        display:block;
        margin-right:50px;
        text-align:left;
        margin-left:auto;
        li{
            margin: 20px 0;
            padding-left:0;
            a{
                position:relative;
                color:white;
                font-size:2rem;
                text-decoration:none;
                text-transform: capitalize;
                &:after{
                   content:'';
                   background:white;
                   bottom:-2px;
                   left:0;
                   height:2px;
                   width:0;
                   position:absolute; 
                }
                &:hover, &.active{
                    &:after{
                        width:100%;
                        transition: all 300ms ease-in;
                    }
                }
            }
            &:last-child{
                margin-bottom:0;
            }
            &:first-child{
                margin-top:0;
            }
        }
    }
`;