import React from 'react';
import {Switch, Route} from 'react-router-dom';
import landingpage from './landingpage';
import aboutme from './aboutme';
import resume from './resume';
import projects from './projects';



const Main=()=>(
    <Switch>
        <Route exact path="/" component={landingpage}/>
        <Route exact path="/aboutme" component={aboutme}/>
        <Route exact path="/resume" component={resume}/>
        <Route exact path="/projects" component={projects}/>
    </Switch>
)

export default Main;