import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';

class Archivement extends Component{
    render(){
        return(
            <Grid>
                <Cell col={4}>
                    <p>{this.props.takenYear}</p>
                </Cell>
                <Cell col={8}>
                   
                    <h5>{this.props.archivementName}</h5>
                </Cell>
            </Grid>
        )
    }
}
export default Archivement;