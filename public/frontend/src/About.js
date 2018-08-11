import React, { Component } from 'react';
import 'devicon';


class About extends Component{

    render(){

        return(

            <div>
                <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
                    <div className="my-auto">
                        <h1 className="mb-0">Heng
                        <span className="text-primary">Li</span>
                        </h1>
                        <div className="subheading mb-5">Chicago IL · (773) 226-7887 ·
                        <a href="mailto:lhengi888@gmail.com">lhengi888@gmail.com</a>
                        </div>
                        <p className="mb-5">My elevator pitch</p>
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
            </div>
        );
    }
}

export default About;
