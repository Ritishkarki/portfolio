import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import matchPath from 'react-router-dom/matchPath';
import { TransitionGroup, Transition } from 'react-transition-group';
import createHistory from 'history/createBrowserHistory';
import { baseStyles } from './components/global/index';
import styled from "styled-components";
import './App.css';
import { handleEnterAnimation, handleExitAnimation } from './utilities/animation';
import {Loader} from "./components/loader";
import Loadable from 'react-loadable';
import NavBar from './components/shared/navbar';

const Home = Loadable({
  loader: () =>import("./scenes/home/home" /* webpackChunkName: "Home" */),
  loading: () => Loader()
});
const Projects = Loadable({
  loader: () =>import("./scenes/projects/projects" /* webpackChunkName: "Projects" */),
  loading: () => Loader()
});
const ProjectDetail = Loadable({
  loader: () =>import("./scenes/projects/project-detail" /* webpackChunkName: "ProjectDetail" */),
  loading: () => Loader()
});
const Experience = Loadable({
  loader: () =>import("./scenes/work-experience/experience" /* webpackChunkName: "Experience" */),
  loading: () => Loader()
});
const Contact = Loadable({
  loader: () =>import("./scenes/contact/contact" /* webpackChunkName: "Contact" */),
  loading: () => Loader()
});
const NoMatch = Loadable({
  loader: () =>import("./scenes/404/index" /* webpackChunkName: "Nomatch" */),
  loading: () => Loader()
});

const routes = [
  {
    component: Home,
    showInMenu: true,
    key: 'home',
    path: '/',
    id: 'home',
    title: 'Ritish Karki | Javascript Devloper',
    description: 'Ritish Karki frontend web developer with more than 2 years experience in react, vue, angular, scss, d3 and leaflet.',
    exact: true
  },
  {
    component: Projects,
    showInMenu: true,
    key: 'projects',
    path: '/projects',
    id: 'projects',
    title: 'Ritish Karki | Projects in Years',
    description: 'List of projects done by ritish karki',
    exact: true
  },
  {
    component: ProjectDetail,
    showInMenu:false,
    key:'project-detail',
    path:'/project/:id',
    id:'project-detail',
    exact:true
  },
  {
    component: Experience,
    showInMenu: true,
    key: 'experience',
    path: '/experience',
    id: 'experience',
    title: 'Ritish Karki | years of experience',
    description: 'Ritish Karki years of experience as a web developer',
    exact: true
  },
  {
    component: Contact,
    showInMenu: true,
    key: 'contact',
    path: '/contact',
    id: 'contact',
    title: 'Ritish Karki | Conatact Details',
    description: 'Contact Details',
    exact: false
  },
];

const filterRoutes = (location) => {
  return routes.filter(({ path, strict, exact }) => {
    return !!matchPath(location.pathname, {
      path,
      strict,
      exact
    })
  })
};

class App extends Component {
  constructor(props){
    super(props);
    this.renderComponents = this.renderComponents.bind(this);
    Home.preload()
    Projects.preload()
    ProjectDetail.preload()
    Contact.preload()
    NoMatch.preload()
    Experience.preload()
  }
  renderComponents(location){
      const path = filterRoutes(location)[0].path
      if (!filterRoutes(location).length) {
        return(
            <TransitionGroup appear>
                <Transition
                    key="404"
                    timeout={0}
                    onEnter={() => console.log('notFound enter')}
                    onEntering={() => console.log('notFound entering')}
                    onEntered={() => console.log('notFound entered')}
                    onExit={() => console.log('notFound exit')}
                    onExiting={() => console.log('notFound exiting')}
                    onExited={() => console.log('notFound exited')}
                >
                    <NoMatch location={location} />
                </Transition>
            </TransitionGroup>
        )

      }else{
        return(
            <TransitionGroup appear>
                {filterRoutes(location).map(({key, ...props}) => (
                    <Transition
                        key={'child-' + key}
                        timeout={2000}
                        onEnter={handleEnterAnimation}
                        // onEntering={() => }
                        // onEntered={() => console.log(`entered ${key}`)}
                        onExit={handleExitAnimation}
                        // onExiting={() => console.log(`exiting ${key}`)}
                        // onExited={() => console.log(`exited ${key}`)}
                    >
                        {React.createElement(routes.find(r => r.path === path ).component, {
                            ...props,
                            location,
                        }, null)}
                    </Transition>
                ))}
            </TransitionGroup>
        );
      }
  }

  render() {
    //importing the base css for the whole project
    baseStyles();
    const history = createHistory();
    return (
      <Router history={history} >
        <Route render={ ({ location }) =>(
            <Perspective>
              <NavBar routes={routes} />
              {
                  this.renderComponents(location)
              }
            </Perspective>
          )}
        />
      </Router>
    );
  }
}


const Perspective = styled.div`
  width: 100%;
  height: 100vh;
  perspective: 100vw;
  overflow-X:hidden;
  position:relative;
`;

export default App;
