import React,{Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Landingpage extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
        
          <div className="banner-text">
            <img
              src="Rohit.png"
              alt="avatar"
              className="avatar-img"
              />

           
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/rohit-yadav-10a862143/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/Rv19" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Quora */}
          <a href="https://www.quora.com/profile/Rohit-Yaduvanshi-15" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-quora" aria-hidden="true" />
          </a>

          {/* Instagram*/}
          <a href="https://www.instagram.com/yaduvanshi_rv1419/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-instagram" aria-hidden="true" />
          </a>

        </div>
            </div>
        
          </Cell>
        </Grid>
      </div>
        )
   }
}
export default Landingpage;