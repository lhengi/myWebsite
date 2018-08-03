import React, { Component } from 'react';
import 'devicon';
import About from './About.js'
import Experience from './Experience.js';
import Education from './Education.js';
import Skills from './Skills.js';
import Interest from './Interest.js';
import Project from './Project.js';

class Content extends Component{

    render(){
        return(

            <div className="container-fluid p-0" >
                <About />
                <Experience />
                <Education />
                <Skills />
                <Interest />
                <Project />


            </div>



        );
    }
}

export default Content;

<div className="container-fluid p-0" >




<section className="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
  <div className="my-auto">
    <h2 className="mb-5">Interests</h2>
    <p> Other than web Development and Embeded System Development. I'm also looking 
        forward to learn more new technologies. Such as, iOS and Android Development, and also
        Mechine Learning, AI, High Performance Computing 
    </p>
  </div>
</section>

<section className="resume-section p-3 p-lg-5 d-flex flex-column" id="projects">
  <div className="my-auto">
    <h2 className="mb-5">Projects</h2>
    <ul className="fa-ul mb-0">
      <li>
        <i className="fa-li fa fa-trophy text-warning"></i>
        First Place in <a href="https://builtworlds.com/news/results-heres-won-builtworlds-3rd-annual-hackathon/">BuiltWorlds hackathon, mHub</a></li>
        <ul>
          <li> Won the maker challenge by creating iPot (a LoRa WAN enabled sensor pack for portable toilets)</li>
          <li> Used the sensor pack to measure the fill level and tip state of a portable toilet</li>
          <li> Data is then sent to the server via LoRa Network</li>
          <li> iPot can help the operator company save money by optimizing the most efficient service routes</li>
        </ul>
        <br/>
        <br/>


        <li> Building Automation Project Using Arduino WiFi Mesh Network</li>
        <ul>
          <li> Work with the team to build a system of WiFi Mesh Network enabled home sensor packs for older buildings</li>
          <li> Prototyped smart smoke detector, boiler controller, doorbell, and a user console.</li>
          <li> Use WiFi Mesh Network to pass JSON objects around to communicate between different units</li>
          <li> Specifically worked on user console, which communicates with all other sensors</li>
        </ul>

        
      
    </ul>
  </div>
</section>

</div>