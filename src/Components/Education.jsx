import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return(
      <div className="card-img-top-resume">
      <Grid className="resume-grid">
        <img
                src="resume.jpeg"
                alt="avatar"
                style={{height: '870px',width:'870px',margin:'auto'}}
                 />
                 
          
        
      </Grid>
      </div>
    )
  }
}

export default Education;
