import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import Landingpage from './Landingpage';
import Aboutme from './Aboutme';
import Contactme from './Contactme';
import Projects from './Projects';
import Resume from './Resume';


const Main = () => (
  <Switch>
    <Route exact path="/" component={Landingpage} />
    <Route path="/aboutme" component={Aboutme} />
    <Route path="/contact" component={Contactme} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
)

export default Main;