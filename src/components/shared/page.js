import React, {Component } from 'react';
import Logo from './logo';
import overlay from '../../assets/icons/sidebarCurved.svg'
import ContactDetails from './contact-details';
import styled from 'styled-components';
class Page extends Component{
    getClassName(){
        if(  this.props.smallSideBar && !this.props.noSidebar){
            return 'right-content-wrapper right-content-wrapper-big'
        }else{
            return 'right-content-wrapper no-sidebar'
        }
    }
    render(){
        return(
            <Wrapper>
                {this.props.hasOverlay && <img src={overlay} className="overlay"/>}
                {!this.props.noSidebar &&
                    <div className={`left-content-wrapper ${this.props.smallSideBar ? 'left-content-wrapper-small' : ''}`}>
                        <Logo />
                        <ContactDetails/>
                    </div>
                }
                <div className={this.getClassName()}>
                    {this.props.children}
                </div>
            </Wrapper>
        )
    }
}
Page.defaultProps={
    smallSideBar :false,
    hasOverlay: false,
    noSidebar:false
}
const Wrapper = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    left:0;
    top:0;
    z-index:2;
    .overlay{
        position:absolute;
        top:0;
        left:0;
        max-height:100vh;
        height:100%;
        width:auto;
    }
    // layout for the app
  .left-content-wrapper{
    width:30%;
    height:100%;
    padding:30px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding: 5vh;
    z-index:3;
    #logo{
      width:190px;
    }
    &-small{
      width:20%;
    }
  }
  .right-content-wrapper{
    display:flex;
    align-items:center;
    width:70%;
    height:100%;
    background:#ecf0f1;
    padding:5vh;
    overflow-Y:scroll;
    &-big{
      width:80%;
      .overlay{
        left:20%;
      }
    }
    &.no-sidebar{
        width:100%;
        display:block;
    }
  }
`;
export default Page;
