import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';
class Experience extends Component{
    render(){
        return(
            <Grid>
                <Cell col={4}>
                    <h5>{this.props.company}</h5>-
                    <h7>{this.props.title}</h7>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <p style={{marginTop:'25px'}}>{this.props.description}</p>

                </Cell>
            </Grid>
        )
    }
}
export default Experience;