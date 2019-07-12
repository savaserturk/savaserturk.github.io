import React,{ Component } from 'react';
import {Grid, Cell } from 'react-mdl';


class landingpage extends Component{
    render(){
         return(
            <div style={{with:'100%',margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="t.jpg"  alt="avatar" style={ {borderRadius:'100px'}} className="avatar-image" />
                        <div className="banner-text">
                            <h1>Programmer</h1>
                            <hr/>
                            <p>JAVA | PHP | PYTHON </p>
                            <div className="social-links">
                                {/*facebook  */}
                                <a href="https://www.facebook.com/savasert" rel="noopener noreferrer"  target="_blank">
                                <i class="fa fa-facebook-square" aria-hidden="true"></i>
                                </a>
                                 {/*github  */}
                                 <a href="https://www.facebook.com/savasert" rel="noopener noreferrer"  target="_blank">
                                <i class="fa fa-github-square" aria-hidden="true"></i>
                                </a>
                                 {/*linkedin  */}
                                 <a href="https://www.linkedin.com/in/savaserturk/" rel="noopener noreferrer"  target="_blank">
                                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>
                                {/*coffee  */}
                                <a href="https://www.facebook.com/savasert" rel="noopener noreferrer"  target="_blank">
                                <i class="fa fa-coffee" aria-hidden="true"></i>
                                </a>
                               

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
         )
    }
}


export default landingpage;