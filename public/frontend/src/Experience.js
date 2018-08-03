import React, { Component } from 'react';

class Experience extends Component{

    render(){

        return(
            <div>
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



            </div>


        );
    }
}

export default Experience;