import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../assets/icons/logo.svg';
import coverPhoto from '../../assets/projects.jpg';
import { NavLink } from 'react-router-dom';
import {Loader} from '../../components/loader';
import Loadable from 'react-loadable';
let time = new TimelineLite();//eslint-disable-line

const ContactDetails= Loadable({
    loader:() => import('../../components/contact-details' /* webpackChunkName: "ContactDetails" */),
    loading:() => Loader()
});

const Typewriter = Loadable({
    loader:() => import('../../utilities/typewriter' /* webpackChunkName: "ContactDetails" */),
    loading:() => Loader()
});

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            texts : ["Single Page App Development ?", "Custom Wordpress Development ?", "Any Frontend Works ?"],
        }
    }

    animationFinish(){
        console.log('finished');
    }

    componentDidMount(){
        this.shouldType = true;
        time.from ("#logo", 1, {opacity:0, width:0})
            .from("#HomeContact", 1, {opacity: 0}, "+=.15")
            .addLabel('contents')
            .from("#HomePortrait", 1, {width:0, boxShadow:0}, "contents")
            .from("#HomeContents", 1, {opacity:0, height:0, zIndex:3}, "contents+=.25")
            .from("#TypeWriter", 1, {opacity:0}, "contents += 1");
    }

    componentWillUnmount(){
       this.shouldType = false;
    }

    render(){
        return(
            <Wrapper>
                <div className="left-content-wrapper">
                    <img id="logo" src={logo} alt="Ritish Karki" />
                    <div id="HomeContact"><ContactDetails ref={node =>{this.HomeContact = node}} /></div>
                </div>
                <div className="right-content-wrapper">
                    <div id="HomePortrait" className="portrait"></div>
                    <div id="TypeWriter" className="typewriter-wrapper">
                            <Typewriter speed={100} tag="p" texts={this.state.texts} randomSpeed={false} />
                        </div>
                    <div id="HomeContents" className="contents">
                        <h2> Hello :) , I'm </h2>
                        <h1 className="uppercase">Ritish <span className="theme-color">Karki</span></h1>
                        <span className="position grey-color">Software Engineer at <a href="http://younginnovations.com.np">Younginnovations Pvt.Ltd</a></span>
                        <p className="description">I am a huge fan of Javascript and frontend development as a whole, I have been doing it for 2.5 Years now. I mainly work with <b>React-Redux</b>, <b>D3</b>, <b>Axios</b> and <b>ES6</b> these days. Please feel free to contact me if you have an Idea or a project in mind.</p>
                        <div className="cta">
                            <NavLink exact to="/projects" activeClassName="active" className="animated-gradient button button-round uppercase"> Portfolio </NavLink>
                            <NavLink exact to="/experience" activeClassName="active" className="button button-round uppercase"> Resume </NavLink>
                        </div>
                    </div>
                </div>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    width:100%;
    height:100vh;
    background:violet;
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    left:0;
    top:0;
    z-index:2;
    
    .left-content-wrapper{
      padding: 5vh;
    }

    // right-contents
    .right-content-wrapper{
        position:relative;
        padding-left:calc(20% + 30px);
        padding-right:80px;
        .portrait{
            width: 42.85714286%;
            -webkit-box-shadow: 0px 0px 36px 10px rgba(0,0,0,0.25);
            -moz-box-shadow: 0px 0px 36px 10px rgba(0,0,0,0.25);
            box-shadow: 0px 0px 36px 10px rgba(0,0,0,0.25);
            height:90vh;
            position:absolute;
            left:-15%;
            top:50%;
            transform:translateY(-50%);
            z-index:3;
            border-radius:5px;
            background: url(${coverPhoto});
            background-size:cover;
            background-position:center;
        }
        .typewriter-wrapper{
            min-height:45px;
            display: flex;
            align-items:center;
            position:absolute;
            top:50%;
            right:-50px;
            transform:rotate(90deg) translateY(-50%);
            width:470px;
            .typewriter{
                font-size: 1.5rem;
                position:absolute;
                padding-left:70px;
            }
            &:before{
                content: "\\2192";
                font-size:70px;
                color: #1565ea;
                left:0;
                top:-17px;
                position:absolute;
            }
        }
        .contents{
            .position{
                font-weight:600;
                font-size:1.1rem;
                padding-left:15px;
                font-style:italic;
            }

            h1{
                position:relative;
                &:before{
                    position:absolute;
                    left: -115px;
                    z-index:3;
                    content:'';
                    top:50%;
                    transform:translateY(-50%);
                    width:100px;
                    height:3px;
                    background: #1565ea;
                }
            }

            .description{
                font-size:18px;
                line-height:1.3;
                max-width:70%;
                margin:50px 0;
            }

            .cta{
                .button{
                    padding:20px 30px;
                    border-radius:31px;
                    text-decoration:none;
                    font-weight:bold;
                    letter-spacing: 3px;
                    &:first-child{
                        margin-right:15px;
                    }
                    &:last-child{
                        border: 2px solid #343a40;
                        color:#343a40;
                        background:transparent;
                        &:hover{
                            background:#343a40;
                            color:white;
                    }
                }
            }
        }

    }
`

;

export default Home;