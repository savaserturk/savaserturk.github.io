import React,{ Component } from 'react';
import {Grid,Cell} from 'react-mdl';
import Education from './education';
import Archivement from './archivement';
import Experience from './experience';

class resume extends Component{
    render(){
         return(
            <Grid>
                <Cell col={4}>
                    <div style={{textAlign:'center'}}>
                    <img src="/images/t.jpg"  alt="avatar" style={ {borderRadius:'100px', height:'400px'}} className="avatar-image" />
                    </div>
                    <h2 style={{paddingTop:'2em'}}>Savas Erturk</h2>
                    <h4 style={{color:'grey'}}>Software Engineer</h4>
                    <hr style={{borderTop:'3px solid #0833fb2',width:'50%'}}></hr>
                    <p style={{width:'75%',margin:'auto',paddingTop:'1em'}}>
                    I have been working for more than 3 years on my startup projects. I have experience with
                    LAMP(Linux, Apache Server, MySQL, PHP) and Flutter/Dart. Currently, I am getting
                    experience with MERN(MongoDB, Express Server, React, Nodejs) developer experience. Also,
                    I have strong knowledge at networking, helpdesk and IT technician field. 
                    </p>
                    <hr style={{borderTop:'3px solid #0833fb2',width:'50%'}}></hr>
                    <h5>Address</h5>
                    <p>Canada/Ottawa Kanata</p>
                    <h5>Phone</h5>
                    <p>??? ??? ?? ??</p>
                    <h5>Web</h5>
                    <p>AVAProcess</p>
                    </Cell>
                <Cell col={8} className="resume-right-col">
                    <h2>Education</h2>
                    
                    <Education
                    startYear={2019}
                    endYear={2021}
                    schoolName="Algonquin College - Computer Engineering Technology / Computing Science"
                    
                    />
                    <Education
                    startYear={2014}
                    endYear={2016}
                    schoolName="Necmettin Erbakan University - Computer Programmer"
                   
                    />
                    <Education
                    startYear={2013}
                    endYear={2008}
                    schoolName="Golcuk Vocational High School - Network Operator"

                    />
                    <hr style={{borderTop:"3px solid #e22947"}}/>
                    <h2>Experience</h2>
                    <Experience
                    company={"artismyjob.com"}
                    title={"Full Stack Developer"}
                    startYear={2018}
                    endYear={2021}
                    description="
                    •• Experience developing full stack web applications with the following technologies OOP
                    PHP, jQuery, HTML/CSS.
                    • Experience designing, developing, and implementing well-documented and reusable
                    APIs
                    • Strong understanding of Object Oriented Programming in LAMP stack environment
                    using PHP 7.3
                    "/>
                    <Experience
                    company={"skitter.com"}
                    title={"Full-Stack Developer"}
                    startYear={2021}
                    endYear={2021}
                    description="
                    •  Experience developing RaspberryPi4 with components
                    • Experience reading documentation of device and connections
                    • Experience creating java native application and api
                    "/>
                    <Experience
                    company={"Forel Information Technologies"}
                    title={"Junior Network Administrator"}
                    startYear={2015}
                    endYear={2015}
                    description="
                    • NAS devices setup and configurations
                    • Remote control helpdesk
                    • Providing technical support for users to include setting up computers, passwords, rights
                    and responsibilities using Active Directory
                    "/>
                    <Experience
                    company={"Kocaeli Metropolitan Municipality (Turkey)"}
                    title={"IT Help desk Technician"}
                    startYear={2011}
                    endYear={2012}
                    description="
                    • Providing installation, configuration, and support of computers
                    • Diagnosing and resolving technical hardware and software issues
                    • Installing and configuration windows operating system
                    "/>
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