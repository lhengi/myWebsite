import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'devicon';

class App extends Component {
  render() {

    return (
      <div className="App" >
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none">My Personal Website</span>
            <span className="d-none d-lg-block">
              <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile.jpg" alt=""/>
            </span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#education">Education</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#interests">Interests</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#projects">Projects</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container-fluid p-0" >

          <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
            <div className="my-auto">
              <h1 className="mb-0">Heng
                <span className="text-primary">Li</span>
              </h1>
              <div className="subheading mb-5">Chicago IL · (773) 226-7887 ·
                <a href="mailto:lhengi888@gmail.com">lhengi888@gmail.com</a>
              </div>
              <p className="mb-5">My elevator pich</p>
              <ul className="list-inline list-social-icons mb-0">
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/heng-li">
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x"></i>
                      <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://github.com/lhengi">
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x"></i>
                      <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
            <div className="my-auto">
              <h2 className="mb-5">Experience</h2>

              <div className="resume-item d-flex flex-column flex-md-row mb-5">
                <div className="resume-content mr-auto">
                  <h3 className="mb-0">Software Engineering Intern</h3>
                  <div className="subheading mb-3">Chamberlain Group, Middleware Team</div>
                  <ul>
                    <li> Built and design a Scalable End to End IoT platform for Chamberlain Group Devices </li>
                    <li> Gather the informations from the product owners and create an Agile Project Plan</li>
                    <li> Design the architecture of the platform</li>
                    <li> Served as Scrum Master</li>
                    <li> Team management and schedule Scrum meetings</li>
                    <li> Design database to fit the need of the application</li>
                    <li> Message Queuing/Routing</li>
                    <li> Experience with Azure Cloud</li>
                      <ul>
                        <li> Azure App Service</li>
                        <li> Azure IoT Hub </li>
                        <li> Azure Serverless Function </li>
                        <li> CosmosDB </li>
                      </ul>
                    <li> Full Stack Development</li>
                      <ul>
                        <li> Frontend: React.js</li>
                        <li> Backend: Node.js, Python</li>
                      </ul>
                  </ul>

                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">May 2018 - August 2018</span>
                </div>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row mb-5">
                <div className="resume-content mr-auto">
                  <h3 className="mb-0">Software Engineering Intern</h3>
                  <div className="subheading mb-3">College of Engineering, UIC</div>
                  <ul>
                    <li> Developed web application to keeps track of room & equipment access</li>
                    <li> Developed web application to allows employee to record their hours</li>
                    <li> Frontend: jQuery, Bootstrap</li>
                    <li> Backend: PHP</li>
                    <li> Designed SQL database to fit the need of the application</li>
                  </ul>

                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">June 2017 - Present</span>
                </div>
              </div>
          </section>

          <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
            <div className="my-auto">
              <h2 className="mb-5">Education</h2>

              <div className="resume-item d-flex flex-column flex-md-row mb-5">
                <div className="resume-content mr-auto">
                  <h3 className="mb-0">University of Illinois at Chicago</h3>
                  <div className="subheading mb-3">Bachelor of Science in Computer Science</div>
                  <p>GPA: 4.00</p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">August 2016 - December 2019</span>
                </div>
              </div>

              <div className="resume-item d-flex flex-column flex-md-row">
                <div className="resume-content mr-auto">
                  <h3 className="mb-0">Naperville North High School</h3>
                  <br/>
                  <p>GPA: 3.87</p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">August 2012 - May 2016</span>
                </div>
              </div>

            </div>
          </section>

          <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
            <div className="my-auto">
              <h2 className="mb-5">Skills</h2>

              <div className="subheading mb-3">Programming Languages &amp; Tools</div>
              <ul className="list-inline list-icons">
                <li className="list-inline-item">
                  <i class="devicon-c-plain"></i>
                </li>
                <li className="list-inline-item">
                  <i class="devicon-cplusplus-plain"></i>
                </li>
                <li className="list-inline-item">
                  <i class="devicon-java-plain-wordmark"></i>
                </li>
                <li className="list-inline-item">
                  <i className="devicon-python-plain-wordmark"></i>
                </li>
                <li className="list-inline-item">
                  <i class="devicon-csharp-plain"></i>
                </li>
                <li className="list-inline-item">
                  <i className="devicon-javascript-plain"></i>
                </li>
                <li className="list-inline-item">
                  <i className="devicon-nodejs-plain-wordmark"></i>
                </li>
                <li className="list-inline-item">
                  <i className="devicon-express-plain-wordmark"></i>
                </li>
                <li className="list-inline-item">
                  <i className="devicon-react-plain-wordmark"></i>
                </li>
                <li className="list-inline-item">
                  <i className="devicon-mongodb-plain-wordmark"></i>
                </li>
                <li className="list-inline-item">
                  <i className="devicon-mysql-plain"></i>
                </li>
                <li className="list-inline-item">
                  <i class="devicon-git-plain"></i>
                </li>
                <li className="list-inline-item">
                  <i className="devicon-ubuntu-plain"></i>
                </li>
                <li className="list-inline-item">
                  <i class="devicon-linux-plain"></i>
                </li>
                <li className="list-inline-item">
                  <i class="devicon-html5-plain-wordmark"></i>
                </li>
                <li className="list-inline-item">
                  <i class="devicon-css3-plain-wordmark"></i>
                </li>
              </ul>
              <div className="subheading mb-3">Prior Experience With</div>
              <ul className="list-inline list-icons">
                <li className="list-inline-item">
                  <i className="devicon-php-plain"/>

                </li>

              </ul>
              {/*<ul className="fa-ul mb-0">
                <li>
                  
                  <i className="fa-li fa fa-check"></i>
                  Agile Development &amp; Scrum</li>
              </ul>*/}
              </div>
          </section>

          <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
            <div className="my-auto">
              <h2 className="mb-5">Interests</h2>
              <p> Other than being web Development and Embeded System Development. I'm also looking 
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

    

      </div>
    );
  }
}

export default App;
