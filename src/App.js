import React,{Component} from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Resume from './Components/Resume';
import Main from './Components/Main';
import { Link } from 'react-router-dom';
import TechnicalStack from './Components/TechnicalStack'

class App extends Component {
  render(){
    return (
   <div>
    <Layout>
        <Header  className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Rohit Yadav</Link>} scroll>
        <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/achievement">Achievements</Link>
                <Link to="/technicalStack">TechnicalStack</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Portfolio" scroll>
        <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/achievement">Achievements</Link>
                <Link to="/technicalStack">TechnicalStack</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
           <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;