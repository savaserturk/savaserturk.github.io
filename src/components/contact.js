import React,{ Component } from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';


class contact extends Component{
    render(){
         return(
             <div className="contact-body">
                 <Grid className="contact-grid">
                     <Cell col={6}>
                         <b><h2>Savas Erturk</h2></b>
                         <img src="t.jpg" alt="avatar" style={{height:'250px'}}></img>
                         <p style={{width:'75%',margin:'auto',paddingTop:'1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                     </Cell>
                     <Cell col={6}>
                         <h2>Contact With me</h2>
                         <hr/>
                         <div className="contact-list">
                         <List>
                         <ListItem>
                           <ListItemContent style={{fontSize:"25px",fontFamily:'Saira Semi Condensed'}} ><i className="fa fa-phone-square" aria-hidden="true"/></ListItemContent>
                         </ListItem>
                         <ListItem>
                           <ListItemContent style={{fontSize:"25px",fontFamily:'Saira Semi Condensed'}} ><i className="fa fa-facebook-square" aria-hidden="true"/>facebook.com/Savasert</ListItemContent>
                         </ListItem><ListItem>
                           <ListItemContent style={{fontSize:"25px",fontFamily:'Saira Semi Condensed'}} ><i className="fa fa-envelope" aria-hidden="true"/>erturk.savas@hotmail.com</ListItemContent>
                         </ListItem>
                        </List>
                         </div>
                         
                        </Cell>
                 </Grid>
             </div>
         )
    }
}

export default contact;