import React, { Component } from 'react';
import { Router, Switch, Route, NavLink } from 'react-router-dom';
import matchPath from 'react-router-dom/matchPath';
import { TransitionGroup, Transition } from 'react-transition-group';
import createHistory from 'history/createBrowserHistory';
import { baseStyles } from './components/global/index';
import Loadable from 'react-loadable';
import { Loader } from './components/loader';
import styled from "styled-components";
import './App.css';
import Transitions from './components/global';

const Home= Loadable({
  loader:() => import('./scenes/home/home' /* webpackChunkName: "Home" */),
  loading:() => Loader()
});

const Projects= Loadable({
  loader:() => import('./scenes/projects/projects' /* webpackChunkName: "Projects" */),
  loading:() => Loader()
});

const Experience= Loadable({
  loader:() => import('./scenes/work-experience/experience' /* webpackChunkName: "Experience" */),
  loading:() => Loader()
});

const Contact= Loadable({
  loader:() => import('./scenes/contact/contact' /* webpackChunkName: "Contact" */),
  loading:() => Loader()
});

const NoMatch= Loadable({
  loader:() => import('./scenes/404/index' /* webpackChunkName: "404-page" */),
  loading:() => Loader()
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
]

const filterRoutes = (location) => {
  return routes.filter(({ path, strict, exact }) => {
    return !!matchPath(location.pathname, {
      path,
      strict,
      exact
    })
  })
}

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      activeIndex:1
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
              <Transitions pageKey={location.key} {...location.state} >
                <Switch location={location}>
                  <Route exact path="/" render={(props) => <Home {...props} index={1} />} />
                  <Route exact path="/projects" render={(props) => <Projects {...props} index={2} />} />
                  <Route exact path="/experience" render={(props) => <Experience {...props} index={3} />}/>
                  <Route exact path="/contact" render={(props) => <Contact {...props} index={4} />} />
                </Switch>
              </Transitions>
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
