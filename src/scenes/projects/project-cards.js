import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { TransitionGroup, Transition } from 'react-transition-group';
import { handleProjectDetailEnter, handleProjectDetailExit } from '../../utilities/animation';


export default class ProjectCard extends Component{
    constructor(props){
        super(props);

        this.state=({
            showProjectDetails: false,
            coOrdinates:{
                top:0,
                left:0,
                width:0,
                height:0
            }
        });

        this.projectRef = React.createRef(); 
    }

    displayProjectDetails(){
        const coOrdinates = ReactDOM.findDOMNode(this.projectRef.current).getBoundingClientRect();
        this.setState({
            showProjectDetails:true,
            coOrdinates
        })
    }

    render(){
        const { project, projectNo } = this.props;
        const {top, left, width, height} = this.state.coOrdinates;
        const style ={
            width:`${width}px`,
            height:`${height}px`,
            top:`${top}px`,
            left:`${left}px`
        }
        return(
            <React.Fragment>
                <Project ref={this.projectRef} backgroundImage ={project.featured_image_src_small} >
                    <a href='' onClick={(e) =>{e.preventDefault(); this.displayProjectDetails()}}>
                        <img className="card-header" src={project.featured_image_src_small} alt="project.title.rendered" />
                        <div className="card-body">
                            <h4>{projectNo + 1}</h4>
                            <h2>{project.title.rendered}</h2>
                            {
                                project.tag_names.length > 0 && project.tag_names.map((tag,i) =>{
                                    return <Tag key={i} className="tag">{tag}</Tag>
                                })
                            }
                        </div>
                        <div className="project-overlay"/>
                    </a>
                </Project>
                {
                    this.state.showProjectDetails && 
                    <TransitionGroup appear>
                        <Transition
                            key={`project-detail-${projectNo + 1}`}
                            timeout={0}
                            onEnter={handleProjectDetailEnter}
                            onEntering={() => console.log('notFound entering')}
                            onEntered={() => console.log('notFound entered')}
                            onExit={handleProjectDetailExit}
                            onExiting={() => console.log('notFound exiting')}
                            onExited={() => console.log('notFound exited')}
                        >
                            <ProjectDetail projectDetails={project} style={style} />
                        </Transition>
                    </TransitionGroup>
                }
            </React.Fragment>
        );
    }
}

const Tag = styled.span`
    font-size:14px;
    color:white;
    display:inline-block;
    padding:10px;
    background: #1565ea;
    margin-right:10px;
    border-radius:5px;
`;

const ProjectDetail = styled.div`
    position:fixed;
    background:#303030;
    z-index:2000;
`

const Project = styled.div`
    width:calc(33.3333% - 30px);
    margin-bottom:50px;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    background:white;
    overflow:hidden;
    > a{
        width:100%;
        height:100%;
        display:block;
        text-decoration:none;
        position:relative;
        &:hover{
            -webkit-box-shadow: 2px 2px 10px 5px rgba(160,160,160,0.51);
            -moz-box-shadow: 2px 2px 10px 5px rgba(160,160,160,0.51);
            box-shadow: 2px 2px 10px 5px rgba(160,160,160,0.51);
        }
        .card-header{
            width:100%;
            height:100%;
        }
        .card-body{
            color:#343a40;
            position:absolute;
            bottom:0;
            left:20px;
            width:100%;
            z-index:10;
            h2, h4{
                margin-bottom:10px;
                color:#fff;
            }
            h4{
                &:before{
                    content: '\\2014';
                    display: inline-block;
                    margin: 0 1rem 0 0;
                }
            }
            .tag {
                background: #343a40;
                border-radius: 3px;
                color: #fff;
                display: inline-block;
                height: 26px;
                line-height: 26px;
                padding: 0 20px 0 23px;
                position: relative;
                margin: 0 10px 10px 0;
                text-decoration: none;
                -webkit-transition: color 0.2s;
            }
              
            .tag::before {
                background: #fff;
                border-radius: 10px;
                box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
                content: '';
                height: 6px;
                left: 10px;
                position: absolute;
                width: 6px;
                top: 10px;
            }
        }
    }
    .project-overlay{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background:rgba(0,0,0,.7);
        z-index:1;
    }
`