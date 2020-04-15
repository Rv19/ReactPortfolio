import React,{Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';

class Resume extends Component{
    render(){
        return(
            <div>
            <Grid>
            <Cell col={4}>
              <div style={{textAlign:'center'}}>
              <img
                src="Rohit.png"
                alt="avatar"
                style={{height: '300px'}}
                 />
            </div>
    <div style={{textAlign:'center'}}>
            <h2>Rohit Yadav</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
             </div>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Shyam Enclave Panchyawala</p>
            <h5>Phone</h5>
            <p>8428250621</p>
            <h5>Email</h5>
            <p>rohit@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>  
             
                </Cell>
                
            <Cell className="resume-right-col" col={8} >
            <Education
              startYear={2002}
              endYear={2006}
              schoolName="My University"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
               />

               <Education
                 startYear={2007}
                 endYear={2009}
                 schoolName="My 2nd University"
                 schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />
                </Cell> 
            </Grid>
            </div>
        )
    }
}
export default Resume;

