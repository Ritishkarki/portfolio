import React, {Component } from 'react';
import Logo from './logo';
import ContactDetails from './contact-details';
import styled from 'styled-components';
class Page extends Component{
    render(){
        return(
            <Wrapper>
                 <div className={`left-content-wrapper ${this.props.smallSideBar ? 'left-content-wrapper-small' : ''}`}>
                    <Logo />
                    <ContactDetails/>
                </div>
                <div className={`right-content-wrapper ${this.props.smallSideBar ? 'right-content-wrapper-big': ''}`}>
                    {this.props.children}
                </div>
            </Wrapper>
        )
    }
}
Page.defaultProps={
    smallSideBar :false
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
    .right-content-wrapper{
      display:block;
      padding: 5vh;
      overflow-Y:scroll;
    }
`;
export default Page;
