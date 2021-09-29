import React,{ Component } from 'react';
import {Tabs,Tab,Grid,Cell,Card,CardTitle,CardActions,CardText,Button,CardMenu,IconButton} from 'react-mdl';

class projects extends Component{
    constructor(props){
        super (props);
        this.state={  activeTab: 0 
          };
    }

    toggleCategories(){
        if(this.state.activeTab===0){
            return(
               
                <div className="projects-grid">
                {/**PROJECT 1 */}
               <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                   <CardTitle style={{color:"#fff",height:'176px',background:'url(https://artismyjob.com/img/user/basic.png) center / cover'}}>My PHP Project</CardTitle>
                <CardText> Art portfolio website - Created for artists and upcoming artists to provide a digital portfolio.</CardText>
                <CardActions border>    
                    <a target="blank" href={"https://artismyjob.com"} ><Button colored>Website</Button></a>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
               </Card>
                 {/**PROJECT 1 */}
                 <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                   <CardTitle style={{color:"#fff",height:'176px',background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Php_logo.svg/1280px-Php_logo.svg.png) center / cover'}}>My PHP Project</CardTitle>
                <CardText> Naber nasilsin iyidir sen nasilsi bende iyiytim nasil olayim iste</CardText>
                <CardActions border>
                    <Button colored >GitHub</Button>
                    <Button colored>Facebook</Button>
                    <Button colored>Live Demo </Button>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
               </Card>
                 {/**PROJECT 1 */}
                 <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                   <CardTitle style={{color:"#fff",height:'176px',background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Php_logo.svg/1280px-Php_logo.svg.png) center / cover'}}>My PHP Project</CardTitle>
                <CardText> Naber nasilsin iyidir sen nasilsi bende iyiytim nasil olayim iste</CardText>
                <CardActions border>
                    <Button colored >GitHub</Button>
                    <Button colored>Facebook</Button>
                    <Button colored>Live Demo </Button>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
               </Card> 
                {/**PROJECT 1 */}
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                   <CardTitle style={{color:"#fff",height:'176px',background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Php_logo.svg/1280px-Php_logo.svg.png) center / cover'}}>My PHP Project</CardTitle>
                <CardText> Naber nasilsin iyidir sen nasilsi bende iyiytim nasil olayim iste</CardText>
                <CardActions border>
                    <Button colored >GitHub</Button>
                    <Button colored>Facebook</Button>
                    <Button colored>Live Demo </Button>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
               </Card> 
 
               
               
               </div>

              
               
            )
        } else if(this.state.activeTab===1){
            return(
                <div><h1>This is SQL</h1></div>
            )
        }
        else if(this.state.activeTab===2){
            return(
                <div><h1>This is JAVA</h1></div>
            )
        }else if(this.state.activeTab===3){
            return(
                <div>
                     {/**PROJECT 1 */}
                 <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                   <CardTitle style={{color:"#000000",height:'176px',background:'url(http://theskitter.com/skitter.jpg) center / cover'}}>Skitter</CardTitle>
                <CardText> Created small ordering device for different purposes.</CardText>
                <CardActions border>
                    <a target="blank" href={"https://theskitter.com"} > <Button colored>Web site</Button></a>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
               </Card> 
                </div>
            )
        }
    }
   
    render(){
         return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({activeTab:tabId})} ripple>
                    <Tab>Web </Tab>
                    <Tab>Desktop </Tab>
                    <Tab>Mobile </Tab>
                    <Tab>IoT </Tab>
                </Tabs>
                
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                    
             
            </div>
            
         )
    }
}

export default projects;