import React, {Component} from 'react';
import Page from '../../components/shared/page';
import styled from 'styled-components';
class ProjectDetail extends Component{
    render(){
        const {projectDetails} = this.props
        return (
            <ProjectDetailScreen>
                <h4>hello</h4>
            </ProjectDetailScreen>
        )
    }
}

const ProjectDetailScreen = styled.div`
    position:'fixed';
    z-index:1000;
    background:'red';
`;

export default ProjectDetail;