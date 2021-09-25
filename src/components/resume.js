import React,{ Component } from 'react';
import {Grid,Cell} from 'react-mdl';
import Education from './education';
import Archivement from './archivement';

class resume extends Component{
    render(){
         return(
            <Grid>
                <Cell col={4}>
                    <div style={{textAlign:'center'}}>
                    <img src="t.jpg"  alt="avatar" style={ {borderRadius:'100px', height:'400px'}} className="avatar-image" />
                    </div>
                    <h2 style={{paddingTop:'2em'}}>Savas Erturk</h2>
                    <h4 style={{color:'grey'}}>Programmer</h4>
                    <hr style={{borderTop:'3px solid #0833fb2',width:'50%'}}></hr>
                    <p style={{width:'75%',margin:'auto',paddingTop:'1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                    <hr style={{borderTop:'3px solid #0833fb2',width:'50%'}}></hr>
                    <h5>Address</h5>
                    <p>Ontario,Ottawa,Canada</p>
                    <h5>Phone</h5>
                    <p>+343 999 99 99</p>
                    <h5>Web</h5>
                    <p>savaserturk.com</p>
                    </Cell>
                <Cell col={8} className="resume-right-col">
                    <h2>Education</h2>
                    
                    <Education
                    startYear={2019}
                    endYear={2021}
                    schoolName="Algonquin College - Computer Engineer"
                    schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                    />
                    <Education
                    startYear={2014}
                    endYear={2016}
                    schoolName="Necmettin Erbakan University - Computer Programmer"
                    schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                    />
                    <Education
                    startYear={2013}
                    endYear={2008}
                    schoolName="Golcuk Vocational High School - Network Operator"
                    schoolDescription="Graduated "
                    />
                    <hr style={{borderTop:"3px solid #e22947"}}/>
                    <h2>Experience</h2>
                    <hr style={{borderTop:"3px solid #e22947"}}/>
                    <h2>Archivements / Certificates</h2>
                     <Archivement
                    takenYear={2021}
                    archivementName="Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning"
                    />
                    <Archivement
                    takenYear={2020}
                    archivementName="Algonquin College - Globalpreneurship Bootcamp 2020"
                    />
                    <Archivement
                    takenYear={2019}
                    archivementName="Ontario WHMIS Certification"
                    />
                    <Archivement
                    takenYear={2012}
                    archivementName="Leonardo Da Vinci Vocational Education and Training (VET) in Austria"
                    />
                    <Archivement
                    takenYear={2012}
                    archivementName="Cisco CCNA Discovery: Networking for Home and Small Businesses"
                    />
                    <Archivement
                    takenYear={2012}
                    archivementName="Cisco CCNA Discovery: Working at a Small-to-Medium Business or ISP"
                   
                    />
                </Cell>

            </Grid>
         )
    }
}

export default resume;