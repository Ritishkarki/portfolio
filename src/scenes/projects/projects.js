import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import Page from '../../components/shared/page';
import { fetchProjects } from '../../actions';
import ProjectCard from './project-cards';
import styled from 'styled-components';

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
        if(this.props.projectsData.fetching !== prevProps.projectsData.fetching && this.props.projectsData.fetching === false){
            if(this.props.projectsData.projectsData && this.props.projectsData.projectsData.length > 0){
                this.setState({projects: this.props.projectsData.projectsData})
            }else{
                this.setState({projects:[]})
            }
        }
    }

    renderProjects(){
        if(this.state.projects.length > 0){
            return this.state.projects.map((project, index) =>{
               return(
                   <ProjectCard key = {index} project={project} />
               );
            });
        }
    }

    render(){
        return(
            <Page smallSideBar= {true}>
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
`;