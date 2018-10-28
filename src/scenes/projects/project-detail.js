import React, {Component} from 'react';
import Page from '../../components/shared/page';
import styled from 'styled-components';
import imac from '../../assets/imac.png';
export default class ProjectDetail extends Component{
    state={
        machHeight:0,
        macWidth:0
    }
    componentDidMount(){
        let macWidth = window.innerWidth * .8 /2.5;
        let machHeight = .8682 * macWidth;
        this.setState({macWidth, machHeight});
    }
    render(){
        const {projectData} = this.props.location.state;
        return (
            <Page smallSideBar>
                <h1>{projectData.title.rendered}</h1>
                <ProjectScreen mac={imac} width={this.state.macWidth} height={this.state.machHeight} className="imac-screen">
                    <div style={{background:`url(${projectData.featured_image_src_large})`,backgroundSize:'cover', backgroundPosition: 'center'}} />
                </ProjectScreen>
            </Page>
        )
    }
}
const ProjectScreen = styled.div`
    width:${(props) => props.width}px;
    height:${(props) => props.height}px;
    padding: ${(props) => props.width * .04167}px;
    padding-bottom:${(props) => props.width * .314769}px;
    display:inline-block;
    position:relative;
    background: url(${props => props.mac});
    background-size:contain;
    background-repeat:no-repeat;
    img{
        position:absolute;
        width: ${(props) => props.width - 2*(props.width*.04167)}px;
        height:auto;
    }
    >div{
        width:100%;
        height:100%;
        display:block;
    }
`;