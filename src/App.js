import React from 'react';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import './App.css';
import Main from './components/main';
import {Link} from 'react-router-dom';

function App() {
  return (
<div className="demo-big-content">
    <Layout>
        <Header className="header-color"  title="Savas Erturk" scroll>
            <Navigation>
                <Link to="/">Home Page</Link>
               <Link to="/resume">Resume</Link>
               <Link to="/aboutme">Aboutme</Link>
               <Link to="/projects">Projects</Link>
            </Navigation>
        </Header>
        <Drawer title="Savas Erturk">
            <Navigation>
             <Link to="/">Home</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/aboutme">Aboutme</Link>
            <Link to="/projects">Projects</Link>
            </Navigation>
        </Drawer>
        <Content>
            
            <div className="page-content"/>
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
