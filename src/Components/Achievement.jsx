import React,{Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Achievement extends Component{
    render(){
        return(
<div className="achieveBack">
<div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#zero" data-slide-to="0" class="active"></li>
    <li data-target="#one" data-slide-to="1"></li>
    <li data-target="#two" data-slide-to="2"></li>
  </ol>
  
  <div class="carousel-inner">
    <div class="carousel-item active">
    <Grid>
            <Cell col={10}>
      <img src="ssb.jpeg" class="d-block w-75" width ="200px"alt="..."/>
      <div class="carousel-caption d-none d-sm-block">
      </div>
      </Cell>
      <Cell className="resume-right-col2" col={2} >
           <h2>dsadsfds
             ffffffffff
             ffffffffff
             ffffffffff
             ffffffffff
             ffffffffff
             ffffffjns</h2>
              </Cell>
      </Grid>
    </div>
    <div class="carousel-item ">
    <Grid>
            <Cell col={10}>
      <img src="ssb.jpeg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-sm-block">
      </div>
      </Cell>
      <Cell className="resume-right-col2" col={2} >
           <h2>dsadsfdsffffffffffffffffffffffffffffffffffffffffffffffffffffffffjns</h2>
              </Cell>
      </Grid>
    </div>
    <div class="carousel-item ">
    <Grid>
            <Cell col={9}>
      <img src="ssb.jpeg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-sm-block">
      </div>
      </Cell>
      <Cell className="resume-right-col2" col={3} >
           <h2>dsadsfdsffffffffffffffffffffffffffffffffffffffffffffffffffffffffjns</h2>
              </Cell>
      </Grid>
    </div>
  </div>
  

<a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only" >Next</span>
  </a>
  </div>
  </div>
       
        )
   }
}
export default Achievement;