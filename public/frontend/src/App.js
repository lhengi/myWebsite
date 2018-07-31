import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
                <a className="nav-link js-scroll-trigger" href="#awards">Awards</a>
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
                  <h3 className="mb-0">Senior Web Developer</h3>
                  <div className="subheading mb-3">Intelitec Solutions</div>
                  <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">March 2013 - Present</span>
                </div>
              </div>

              <div className="resume-item d-flex flex-column flex-md-row mb-5">
                <div className="resume-content mr-auto">
                  <h3 className="mb-0">Web Developer</h3>
                  <div className="subheading mb-3">Intelitec Solutions</div>
                  <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">December 2011 - March 2013</span>
                </div>
              </div>

              <div className="resume-item d-flex flex-column flex-md-row mb-5">
                <div className="resume-content mr-auto">
                  <h3 className="mb-0">Junior Web Designer</h3>
                  <div className="subheading mb-3">Shout! Media Productions</div>
                  <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">July 2010 - December 2011</span>
                </div>
              </div>

              <div className="resume-item d-flex flex-column flex-md-row">
                <div className="resume-content mr-auto">
                  <h3 className="mb-0">Web Design Intern</h3>
                  <div className="subheading mb-3">Shout! Media Productions</div>
                  <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">September 2008 - June 2010</span>
                </div>
              </div>

            </div>

          </section>

          <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
            <div className="my-auto">
              <h2 className="mb-5">Education</h2>

              <div className="resume-item d-flex flex-column flex-md-row mb-5">
                <div className="resume-content mr-auto">
                  <h3 className="mb-0">University of Colorado Boulder</h3>
                  <div className="subheading mb-3">Bachelor of Science</div>
                  <div>Computer Science - Web Development Track</div>
                  <p>GPA: 3.23</p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">August 2006 - May 2010</span>
                </div>
              </div>

              <div className="resume-item d-flex flex-column flex-md-row">
                <div className="resume-content mr-auto">
                  <h3 className="mb-0">James Buchanan High School</h3>
                  <div className="subheading mb-3">Technology Magnet Program</div>
                  <p>GPA: 3.56</p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">August 2002 - May 2006</span>
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
                  <i className="devicons devicons-java"></i>
                </li>
                <li className="list-inline-item">
                  <i className="devicons devicons-react"></i>
                </li>
                <li className="list-inline-item">
                  <i className="devicons devicons-mysql"></i>
                </li>
                <li className="list-inline-item">
                  <i className="devicons devicons-python"></i>
                </li>
                <li className="list-inline-item">
                  <i className="devicons devicons-nodejs"></i>
                </li>
                <li className="list-inline-item">
                  <i className="devicons devicons-ubuntu"></i>
                </li>
                <li className="list-inline-item">
                  <i className="devicons devicons-mongodb"></i>
                </li>
                <li className="list-inline-item">
                  <i className="devicons devicons-c-plain"></i>
                </li>
              

                <li className="list-inline-item">
                  <i className="devicons devicons-html5"></i>
                </li>
                <li className="list-inline-item">
                  <i className="devicons devicons-css3"></i>
                </li>
                <li className="list-inline-item">
                  <i className="devicons devicons-javascript"></i>
                </li>
                <li className="list-inline-item">
                  <i className="devicons devicons-wordpress"></i>
                </li>
              </ul>

              <div className="subheading mb-3">Workflow</div>
              <ul className="fa-ul mb-0">
                <li>
                  <i className="fa-li fa fa-check"></i>
                  Mobile-First, Responsive Design</li>
                <li>
                  <i className="fa-li fa fa-check"></i>
                  Cross Browser Testing &amp; Debugging</li>
                <li>
                  <i className="fa-li fa fa-check"></i>
                  Cross Functional Teams</li>
                <li>
                  <i className="fa-li fa fa-check"></i>
                  Agile Development &amp; Scrum</li>
              </ul>
            </div>
          </section>

          <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
            <div className="my-auto">
              <h2 className="mb-5">Interests</h2>
              <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skiier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
              <p className="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technolgy advancements in the front-end web development world.</p>
            </div>
          </section>

          <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
            <div className="my-auto">
              <h2 className="mb-5">Awards &amp; Certifications</h2>
              <ul className="fa-ul mb-0">
                <li>
                  <i className="fa-li fa fa-trophy text-warning"></i>
                  Google Analytics Certified Developer</li>
              </ul>
            </div>
          </section>
        
        </div>

    

      </div>
    );
  }
}

export default App;
