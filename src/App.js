import React, { Component } from 'react';
import { Router, Route, NavLink } from 'react-router-dom';
import matchPath from 'react-router-dom/matchPath';
import { TransitionGroup, Transition } from 'react-transition-group';
import createHistory from 'history/createBrowserHistory';
import { baseStyles } from './components/global/index';
import styled from "styled-components";
import './App.css';
import { handleEnterAnimation, handleExitAnimation } from './utilities/animation';
import Home from './scenes/home/home';
import Projects from './scenes/projects/projects';
import Experience from './scenes/work-experience/experience';
import Contact from './scenes/contact/contact';
import NoMatch from './scenes/404/index';

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
  }

  renderComponents(location){
      const path = `/${location.pathname.split('/')[1]}`;
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
              <Navbar>
                {routes.map(({ showInMenu, path, key }) => {
                  return showInMenu && (
                      <Link to={path} key={`link-${key}`}><span data-tooltip={key} data-tooltip-conf="left"><span className="icon"/></span></Link>
                    )
                  })
                }
              </Navbar>
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

const Link = props => (
  <li>
    <NavLink exact activeClassName="active"  {...props}  />
  </li>
);


const Perspective = styled.div`
  width: 100%;
  height: 100vh;
  perspective: 100vw;
  overflow-X:hidden;
  position:relative;
`;

const Navbar = styled.ul`
  padding: 0;
  margin: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right:15px;
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items:flex-end;
  list-style:none;
  text-align: right;
  z-index:999999;

  li{
    a{
      display:flex;
      align-items:center;
      justify-content:space-between;
      height:20px;
      width:20px;
      border-radius:50%;
      margin: 5px 0;
      background:rgba(0, 0, 0, .2);
      transition: all 300ms ease-in;
      .icon{
        height:20px;
        width:20px;
        display:flex;
        justify-content:center;
        align-items:center;
        transition: all 300ms ease-in;
      }
      &:hover, &.active{
        background:rgba(21, 101, 234, .8);
        transition: all 300ms ease-in;
      }
    }
  }
`;

export default App;
