import React,{Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component{
    render(){
        return(
            <div className="projects-grid1">
                  <div className="projects-grid2">
            <Card className="card" shadow={1} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React PortFolio</CardTitle>
              <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText>
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://github.com/Rv19/ReactPortfolio">Github</a></Button>
              </CardActions>
            
            </Card>
  
            {/* Project 2 */}
            <Card className="card" shadow={1} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(android.jpeg)top / cover'}} >XYLO Application</CardTitle>
              <CardText>
                XYLOPHONE music App which is musical application to play xylophone
              </CardText>
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://github.com/Rv19/XylophoneAPP">Github</a></Button>
              </CardActions>
         
            </Card>
  
</div>
</div>

        )
   }
}
export default Projects;