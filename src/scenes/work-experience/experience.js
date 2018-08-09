import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchExperience } from '../../actions/index';
import styled from 'styled-components';

class Experience extends Component{
    constructor(props){
        super(props);
        this.props.fetchExperience();
    }
    componentDidUpdate(){
        console.log(this.props.experienceData);
    }
    render(){
        return(
            <Wrapper>
                <div className="left-content-wrapper left-content-wrapper-small">
                    <h1> Experience Component </h1>
                </div>
                <div className="right-content-wrapper right-content-wrapper-big">
                    rightcontent
                </div>
            </Wrapper>
        );
    }
}

function mapStateToProps(state){
    return { experienceData: state.experienceData}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators( { fetchExperience }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(Experience);

const Wrapper = styled.div`
    width:100%;
    height:100vh;
    background:purple;
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    left:0;
    top:0;
    z-index:2;
`;