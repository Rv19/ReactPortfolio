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
      <img src="ssb.jpeg" class="d-block w-100" width ="200px"alt="..."/>
      <div class="carousel-caption d-none d-sm-block">
      </div>
      </Cell>
      <Cell className="resume-right-col2" col={2} >
         <h2 className="asd">SSB</h2>
            <h4 className="asd" >12 SSB Bangalore</h4> 
            <div className="ach-grid"> 
            <h5>Got Recommended For Indian Navy on 24th October 2019. One of the Best Moment of my life for which I was Dreaming from Childhood. Always have a passion for Armed Forces and Achieved my path in my first Attempt.</h5> 
             <h6>For Complete Journey you can check</h6> 
             <a href ="https://www.quora.com/profile/Rohit-Yaduvanshi-15" target="_blank">Click here</a>
             </div>  </Cell>
      </Grid>
    </div>
    <div class="carousel-item ">
    <Grid>
            <Cell col={10}>
      <img src="mba.jpeg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-sm-block">
      </div>
      </Cell>
      <Cell className="resume-right-col2" col={2} >
    
      
          <h3 className="asd">W-OPTEC</h3>
          
            <h4 className="asd">Best Project</h4>     
            <div className="ach-grid"> 
            <h5>Got Best Project for Supply Chain Management in W-OPTEC 2019. Won the best Project among all the MBA participants.</h5> 
             </div>  </Cell>
      </Grid>
    </div>
    <div class="carousel-item ">
    <Grid>
            <Cell col={10}>
      <img src="papien.jpeg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-sm-block">
      </div>
      </Cell>
      <Cell className="resume-right-col2" col={2} >
          <h3 className="asd">Papientrega</h3>
         
            <h4 className="asd">Best Pitch</h4>    
            <div className="ach-grid"> 
            <h5>Best Project Pitch for Helping Hands Application which was created for Old and Physically Disabled People.</h5> 
             </div>
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