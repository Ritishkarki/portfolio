import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import Logo from '../../components/shared/logo';
import ContactDetails from '../../components/shared/contact-details';
import { fetchProjects } from '../../actions/index';
import styled from 'styled-components';

class Projects extends Component{
    constructor(props){
        super(props);
        this.props.fetchProjects();
        this.renderProjects = this.renderProjects.bind(this);
    }

    componentDidUpdate(prevState, prevProps){
        console.log(this.props.projectsData);
    }

    renderProjects(){
        if(this.props.projectsData.length){
            return this.props.projectsData.map(project =>{
               return(
                   <div>
                       <h2>{project.title.rendered}</h2>
                   </div>
               );
            });
        }
    }

    render(){
        return(
            <Wrapper>
                <div className="left-content-wrapper left-content-wrapper-small">
                    <Logo />
                    <ContactDetails/>
                </div>
                <div className="right-content-wrapper right-content-wrapper-big">
                    <h1>Latest Works</h1>
                    <ProjectsWrapper>
                        {this.renderProjects()}
                    </ProjectsWrapper>
                </div>
            </Wrapper>
        );
    }
}

function mapStateToProps(state){
    return { projectsData: state.projectsData}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators( { fetchProjects }, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);

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
    }
`;

const ProjectsWrapper = styled.div`
    width:100%;
    margin-top:5vh;
`;