import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchHomeData } from '../../actions/index';
import styled from 'styled-components';
import coverPhoto from '../../assets/banner.jpg';
import Page from '../../components/shared/page';
import { NavLink } from 'react-router-dom';
import {Loader} from '../../components/loader';
import Loadable from 'react-loadable';
let time = new TimelineLite();//eslint-disable-line

const Typewriter = Loadable({
    loader:() => import('../../utilities/typewriter' /* webpackChunkName: "ContactDetails" */),
    loading:() => Loader()
});

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            texts : ["Single Page App Development ?", "Custom Wordpress Development ?", "Any Frontend Works ?"],
        };
        this.props.fetchHomeData();
    }

    animationFinish(){
        console.log('finished');
    }

    componentWillMount(){
        this.shouldType = true;
    }

    componentDidMount(){
        time.addLabel('contents')
            .from("#HomePortrait", 2, {width:0, boxShadow:0, height:0}, "contents")
            .from("#HomeContents", 1, {opacity:0, zIndex:3}, "contents+=1.5")
    }

    componentWillUnmount(){
       this.shouldType = false;
    }

    render(){
        const { homeDatas } = this.props;
        return(
            <Page hasOverlay smallSideBar>
                {this.shouldType &&
                    <React.Fragment>
                        <HomeContents>
                            <div id="HomePortrait" className="portrait" />
                            {/* <div id="TypeWriter" className="typewriter-wrapper">
                                <Typewriter speed={100} tag="p" texts={this.state.texts} randomSpeed={false} />
                            </div> */}
                            <div id="HomeContents" className="contents">
                                <h2> Hello :) , I'm </h2>
                                <h1 className="uppercase">Ritish <span className="theme-color">Karki</span></h1>
                                <span className="position grey-color">Software Engineer at <a href="http://younginnovations.com.np">Younginnovations Pvt.Ltd</a></span>
                                { homeDatas.homeDatas ? <div className="description" dangerouslySetInnerHTML={{__html: (homeDatas.homeDatas.content.rendered || '')}} /> : <p className="description">... loading</p> }
                                <div className="cta">
                                    <NavLink exact to="/projects" activeClassName="active" className="animated-gradient button button-round uppercase"> Portfolio </NavLink>
                                    <NavLink exact to="/experience" activeClassName="active" className="button button-round uppercase"> Resume </NavLink>
                                </div>
                            </div>
                        </HomeContents>
                    </React.Fragment>
                }
            </Page>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchHomeData }, dispatch);
}

function mapStateToProps(state) {
    return { homeDatas : state.homeDatas }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const HomeContents = styled.div`
height:calc(100% - 10vh);
display:flex;
align-items:center;
position:absolute;
padding-left:30vw;
.portrait{
    width: 30vw;
    -webkit-box-shadow: 0px 0px 36px 10px rgba(0,0,0,0.25);
    -moz-box-shadow: 0px 0px 36px 10px rgba(0,0,0,0.25);
    box-shadow: 0px 0px 36px 10px rgba(0,0,0,0.25);
    height:90vh;
    position:absolute;
    left:-5vh;
    top:50%;
    transform:translateY(-50%);
    z-index:3;
    background: #ecf0f1 url(${coverPhoto});
    background-size:cover;
    background-repeat:no-repeat;
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
`;
