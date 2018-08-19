import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchExperience } from '../../actions/index';
import Page from '../../components/shared/page'

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
            <Page smallSideBar= {true}>
               <h1>Experience</h1>
            </Page>
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