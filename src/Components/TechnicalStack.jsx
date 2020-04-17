import React,{Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class TechnicalStack extends Component{
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
      }
      toggleCategories() {
   
        if(this.state.activeTab === 1){
            return(
                <div className="stack-grid1">
                <div className="stack-grid2">
            <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
            <img
                src="html.png"
                alt="avatar"
                style={{height: '180px',width:'200px',margin: 'auto'}}
                 />
                 <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>HTML</h2>
            </Card>

            <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
            <img
                src="css.png"
                alt="avatar"
                style={{height: '180px',width:'200px',margin: 'auto'}}
                 />
                 <h2 class="font-list" style={{width:'180px',margin: 'auto'}}>CSS</h2>
            </Card>

            <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
            <img
                src="js.png"
                alt="avatar"
                style={{height: '180px',width:'200px',margin: 'auto'}}
                 />
                 <h2 class="font-list" style={{width:'180px',margin: 'auto'}}>Javascript</h2>
            </Card>

            <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
            <img
                src="bootstrap.png"
                alt="avatar"
                style={{height: '180px',width:'200px',margin: 'auto'}}
                 />
                 <h2 class="font-list" style={{width:'180px',margin: 'auto'}}>Bootstrap</h2>
            </Card>
        </div>

        <div className="stack-grid2">
        <Card shadow={1} style={{width:'250px',height:'200px',margin: 'auto'}}>
            <img
                src="react.png"
                alt="avatar"
                style={{height: '200px',width:'200px',margin: 'auto'}}
                 />
                 <h2 class="font-list" style={{width:'180px',margin: 'auto'}}>React</h2>
            </Card>

        </div>
        </div>)}


 else if(this.state.activeTab === 0) {
                return(
                <div className="stack-grid1">
                <div className="stack-grid2">
                <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
            <img
                src="docker.jpeg"
                alt="avatar"
                style={{height: '180px',width:'200px',margin: 'auto'}}
                 />
                 <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>Docker</h2>
            </Card>

            <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
            <img
                src="aws.jpeg"
                alt="avatar"
                style={{height: '180px',width:'200px',margin: 'auto'}}
                 />
                 <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>AWS</h2>
            </Card>

            <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
            <img
                src="mongo.jpeg"
                alt="avatar"
                style={{height: '180px',width:'200px',margin: 'auto'}}
                 />
                 <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>MongoDB</h2>
            </Card>
            <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
            <img
                src="swagger.jpeg"
                alt="avatar"
                style={{height: '180px',width:'200px',margin: 'auto'}}
                 />
                 <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>Swagger</h2>
            </Card>
            <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
            <img
                src="oauth.jpeg"
                alt="avatar"
                style={{height: '180px',width:'200px',margin: 'auto'}}
                 />
                 <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>Oauth</h2>
            </Card>
            </div>
            <div className="stack-grid2">

            <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
            <img
                src="netflix.jpeg"
                alt="avatar"
                style={{height: '180px',width:'200px',margin: 'auto'}}
                 />
                 <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>Netflix</h2>
            </Card>

            <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
            <img
                src="git.jpeg"
                alt="avatar"
                style={{height: '180px',width:'200px',margin: 'auto'}}
                 />
                 <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>GIT</h2>
            </Card>
            
            <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
            <img
                src="html.png"
                alt="avatar"
                style={{height: '180px',width:'200px',margin: 'auto'}}
                 />
                 <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>HTML</h2>
            </Card>

            <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
            <img
                src="css.png"
                alt="avatar"
                style={{height: '180px',width:'200px',margin: 'auto'}}
                 />
                 <h2 class="font-list" style={{width:'180px',margin: 'auto'}}>CSS</h2>
            </Card>

            <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
            <img
                src="js.png"
                alt="avatar"
                style={{height: '180px',width:'200px',margin: 'auto'}}
                 />
                 <h2 class="font-list" style={{width:'180px',margin: 'auto'}}>Javascript</h2>
            </Card>
            </div>
            <div className="stack-grid2">

            <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
            <img
                src="bootstrap.png"
                alt="avatar"
                style={{height: '180px',width:'200px',margin: 'auto'}}
                 />
                 <h2 class="font-list" style={{width:'180px',margin: 'auto'}}>Bootstrap</h2>
            </Card>
    
        <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
            <img
                src="react.png"
                alt="avatar"
                style={{height: '180px',width:'200px',margin: 'auto'}}
                 />
                 <h2 class="font-list" style={{width:'180px',margin: 'auto'}}>React</h2>
            </Card>
          
            <Card shadow={1} style={{width:'250px',height:'220px',margin:'auto'}}>
                <img
                src="jenkins.png"
                alt="avatar"
                style={{height:'180px',width:'200px',margin:'auto'}}/>
                <h2 class="font-list" style={{width:'180px',margin:'auto'}}>Jenkins</h2>
                 </Card>
             <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
            <img
                src="groovy.jpeg"
                alt="avatar"
                style={{height: '180px',width:'200px',margin: 'auto'}}
                 />
                 <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>Groovy</h2>
            </Card>
            <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
            <img
                src="maven.png"
                alt="avatar"
                style={{height: '180px',width:'200px',margin: 'auto'}}
                 />
                 <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>Maven</h2>
            </Card></div>  <div className="stack-grid2">
         
            <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
            <img
                src="hibernate.png"
                alt="avatar"
                style={{height: '180px',width:'200px',margin: 'auto'}}
                 />
                 <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>Hibernate</h2>
            </Card>
            <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
            <img
                src="spring.jpeg"
                alt="avatar"
                style={{height: '180px',width:'200px',margin: 'auto'}}
                 />
                 <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>SpringBoot</h2>
            </Card>
           
            <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
            <img
                src="restapi.jpeg"
                alt="avatar"
                style={{height: '180px',width:'200px',margin: 'auto'}}
                 />
                 <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>Rest</h2>
            </Card>
            <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
            <img
                src="eclipse.jpeg"
                alt="avatar"
                style={{height: '180px',width:'200px',margin: 'auto'}}
                 />
                 <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>Eclipse</h2>
            </Card>
         
            <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
            <img
                src="jdbc.jpeg"
                alt="avatar"
                style={{height: '180px',width:'200px',margin: 'auto'}}
                 />
                 <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>JDBC</h2>
            </Card>
            </div>
            <div className="stack-grid2">
            <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
            <img
                src="junit.jpeg"
                alt="avatar"
                style={{height: '180px',width:'200px',margin: 'auto'}}
                 />
                 <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>Junit</h2>
            </Card>
            <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
            <img
                src="tomcat.jpeg"
                alt="avatar"
                style={{height: '180px',width:'200px',margin: 'auto'}}
                 />
                 <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>Tomcat</h2>
            </Card>
         
            <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
            <img
                src="mysql.jpeg"
                alt="avatar"
                style={{height: '180px',width:'200px',margin: 'auto'}}
                 />
                 <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>MY SQL</h2>
            </Card>
 
            <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
            <img
                src="postgre.jpeg"
                alt="avatar"
                style={{height: '180px',width:'200px',margin: 'auto'}}
                 />
                 <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>Postgre</h2>
            </Card>
            <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
            <img
                src="php.jpeg"
                alt="avatar"
                style={{height: '180px',width:'200px',margin: 'auto'}}
                 />
                 <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>php</h2>
            </Card>
            </div>
            <div className="stack-grid2">
            <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
            <img
                src="scala.jpeg"
                alt="avatar"
                style={{height: '180px',width:'200px',margin: 'auto'}}
                 />
                 <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>Scala</h2>
            </Card>

            <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
            <img
                src="java.jpeg"
                alt="avatar"
                style={{height: '180px',width:'200px',margin: 'auto'}}
                 />
                 <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>Java</h2>
            </Card>
          
            <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
            <img
                src="gatling.jpeg"
                alt="avatar"
                style={{height: '180px',width:'200px',margin: 'auto'}}
                 />
                 <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>Gatling</h2>
            </Card>
            <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
            <img
                src="springboot.jpeg"
                alt="avatar"
                style={{height: '180px',width:'200px',margin: 'auto'}}
                 />
                 <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>SpringBoot</h2>
            </Card>
            <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
            <img
                src="postman.logo.png"
                alt="avatar"
                style={{height: '180px',width:'200px',margin: 'auto'}}
                 />
                 <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>Postman</h2>
            </Card>
            </div>
            <div className="stack-grid2">
            <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
            <img
                src="lighthouse.jpeg"
                alt="avatar"
                style={{height: '180px',width:'200px',margin: 'auto'}}
                 />
                 <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>lighthouse</h2>
            </Card>
            </div>
        </div>)}

         else if(this.state.activeTab === 2) {
          return (
            <div className="stack-grid1">
            <div className="stack-grid2">
        <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
        <img
            src="swagger.jpeg"
            alt="avatar"
            style={{height: '180px',width:'200px',margin: 'auto'}}
             />
             <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>Swagger</h2>
        </Card>
        <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
        <img
            src="oauth.jpeg"
            alt="avatar"
            style={{height: '180px',width:'200px',margin: 'auto'}}
             />
             <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>Oauth</h2>
        </Card>
        <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
        <img
            src="netflix.jpeg"
            alt="avatar"
            style={{height: '180px',width:'200px',margin: 'auto'}}
             />
             <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>Netflix</h2>
        </Card>
        <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
        <img
            src="maven.png"
            alt="avatar"
            style={{height: '180px',width:'200px',margin: 'auto'}}
             />
             <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>Maven</h2>
        </Card>
     
        <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
        <img
            src="hibernate.png"
            alt="avatar"
            style={{height: '180px',width:'200px',margin: 'auto'}}
             />
             <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>Hibernate</h2>
        </Card>
        </div>
       <div className="stack-grid2">
        <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
        <img
            src="spring.jpeg"
            alt="avatar"
            style={{height: '180px',width:'200px',margin: 'auto'}}
             />
             <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>SpringBoot</h2>
        </Card>
       
        <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
        <img
            src="restapi.jpeg"
            alt="avatar"
            style={{height: '180px',width:'200px',margin: 'auto'}}
             />
             <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>Rest</h2>
        </Card>
        <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
        <img
            src="eclipse.jpeg"
            alt="avatar"
            style={{height: '180px',width:'200px',margin: 'auto'}}
             />
             <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>Eclipse</h2>
        </Card>
     
        <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
        <img
            src="jdbc.jpeg"
            alt="avatar"
            style={{height: '180px',width:'200px',margin: 'auto'}}
             />
             <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>JDBC</h2>
        </Card>
        <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
        <img
            src="junit.jpeg"
            alt="avatar"
            style={{height: '180px',width:'200px',margin: 'auto'}}
             />
             <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>Junit</h2>
        </Card>
        </div>
       <div className="stack-grid2">
        <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
        <img
            src="tomcat.jpeg"
            alt="avatar"
            style={{height: '180px',width:'200px',margin: 'auto'}}
             />
             <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>Tomcat</h2>
        </Card>
     
        <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
        <img
            src="php.jpeg"
            alt="avatar"
            style={{height: '180px',width:'200px',margin: 'auto'}}
             />
             <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>php</h2>
        </Card>
    
        <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
        <img
            src="scala.jpeg"
            alt="avatar"
            style={{height: '180px',width:'200px',margin: 'auto'}}
             />
             <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>Scala</h2>
        </Card>

        <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
        <img
            src="java.jpeg"
            alt="avatar"
            style={{height: '180px',width:'200px',margin: 'auto'}}
             />
             <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>Java</h2>
        </Card>
      
        <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
        <img
            src="springboot.jpeg"
            alt="avatar"
            style={{height: '180px',width:'200px',margin: 'auto'}}
             />
             <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>SpringBoot</h2>
        </Card>
        </div>
       <div className="stack-grid2">
        <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
        <img
            src="postman.logo.png"
            alt="avatar"
            style={{height: '180px',width:'200px',margin: 'auto'}}
             />
             <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>Postman</h2>
        </Card>
       
        <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
        <img
            src="lighthouse.jpeg"
            alt="avatar"
            style={{height: '180px',width:'200px',margin: 'auto'}}
             />
             <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>lighthouse</h2>
        </Card>
        </div>


    </div>)}

        else if(this.state.activeTab === 3) {
          return (
            <div className="stack-grid1">
            <div className="stack-grid2">
            <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
        <img
            src="docker.jpeg"
            alt="avatar"
            style={{height: '180px',width:'200px',margin: 'auto'}}
             />
             <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>Docker</h2>
        </Card>

        <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
        <img
            src="aws.jpeg"
            alt="avatar"
            style={{height: '180px',width:'200px',margin: 'auto'}}
             />
             <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>AWS</h2>
        </Card>
        </div>
        </div>

          )
        }

        else if(this.state.activeTab === 4) {
            return(
            <div className="stack-grid1">
            <div className="stack-grid2">
            
        <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
        <img
            src="mongo.jpeg"
            alt="avatar"
            style={{height: '180px',width:'200px',margin: 'auto'}}
             />
             <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>MongoDB</h2>
        </Card>
        
        <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
        <img
            src="mysql.jpeg"
            alt="avatar"
            style={{height: '180px',width:'200px',margin: 'auto'}}
             />
             <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>MY SQL</h2>
        </Card>

        <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
        <img
            src="postgre.jpeg"
            alt="avatar"
            style={{height: '180px',width:'200px',margin: 'auto'}}
             />
             <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>Postgre</h2>
        </Card>
        </div>
    </div>)}

else if(this.state.activeTab === 5) {
    return(
    <div className="stack-grid1">
    <div className="stack-grid2">
<Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
<img
    src="git.jpeg"
    alt="avatar"
    style={{height: '180px',width:'200px',margin: 'auto'}}
     />
     <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>GIT</h2>
</Card>

<Card shadow={1} style={{width:'250px',height:'220px',margin:'auto'}}>
    <img
    src="jenkins.png"
    alt="avatar"
    style={{height:'180px',width:'200px',margin:'auto'}}/>
    <h2 class="font-list" style={{width:'180px',margin:'auto'}}>Jenkins</h2>
     </Card>
 <Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>

<img
    src="groovy.jpeg"
    alt="avatar"
    style={{height: '180px',width:'200px',margin: 'auto'}}
     />
     <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>Groovy</h2>
</Card>

<Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
<img
    src="gatling.jpeg"
    alt="avatar"
    style={{height: '180px',width:'200px',margin: 'auto'}}
     />
     <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>Gatling</h2>
</Card>
<Card shadow={1} style={{width:'250px',height:'220px',margin: 'auto'}}>
<img
    src="springboot.jpeg"
    alt="avatar"
    style={{height: '180px',width:'200px',margin: 'auto'}}
     />
     <h2 class="font-list" style={{width:'60px',height:'50px',margin:'auto'}}>SpringBoot</h2>
</Card>
</div>
</div>)}

      }
    
    
    
      render() {
        return(
          <div>
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
              <Tab>All</Tab>
              <Tab>Frontend</Tab>
              <Tab>Backend</Tab>
              <Tab>Cloud Servers</Tab>
              <Tab>Databses</Tab>
              <Tab>Config</Tab>
            </Tabs>
    
    
              <Grid>
                <Cell col={6}>
                  <div className="content">{this.toggleCategories()}</div>
                </Cell>
              </Grid>
    
    
          </div>
        )
      }
    }      

export default TechnicalStack;