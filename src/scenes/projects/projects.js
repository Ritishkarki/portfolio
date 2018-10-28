import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import Page from '../../components/shared/page';
import { fetchProjects } from '../../actions';
import ProjectCard from './project-cards';
import styled from 'styled-components';
import {Loader} from '../../components/loader';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state={
            projects: []
        }
        this.props.fetchProjects();
        this.renderProjects = this.renderProjects.bind(this);
    }

    componentDidUpdate(prevProps){
        const {fetching, projects } = this.props.projectsData
        if(!fetching && projects !== prevProps.projectsData.projects && projects.length > 0){
            this.setState({
                projects
            })
        }
    }

    renderProjects(){
        if(this.state.projects.length > 0){
            return this.state.projects.map((project, index) =>{
               return(
                   <ProjectCard key = {index} projectNo ={index} project={project} />
               );
            });
        }else{
            return Loader();
        }
    }

    render(){
        const {fetching, projectsData } = this.props.projectsData
        return(
            <Page smallSideBar noSidebar>
                <h1>Latest Works</h1>
                <ProjectsWrapper>
                    {this.renderProjects()}
                </ProjectsWrapper>
            </Page>
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

const ProjectsWrapper = styled.div`
    width:100%;
    margin-top:5vh;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    > a{
        position:fixed;
        top:50%;
        left:0;
        transform:rotate(270deg) translateY(-50%);
    }
`;