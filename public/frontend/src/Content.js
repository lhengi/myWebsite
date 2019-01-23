import React, { Component } from 'react';
import 'devicon';
import About from './About.js'
import Experience from './Experience.js';
import Education from './Education.js';
import Skills from './Skills.js';
import Courses from './Courses.js';
import Project from './Project.js';

class Content extends Component{

    render(){
        return(

            <div className="container-fluid p-0" >
                <About />
                <Experience />
                <Education />
                <Skills />
                <Courses />
                <Project />


            </div>



        );
    }
}

export default Content;


