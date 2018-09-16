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
                                <li> Worked in an agile team to build and design a scalable proof of concept End to End IoT platform for    
                                Chamberlain Group Devices</li>
                                <li> For two weeks served as Scrum Master</li>
                                    <ul>
                                        <li>Communicate with product manager to keep the project on track and make plans for the next sprint</li>
                                        <li>Scheduled team meetings and project management</li>
                                        <li>Used Jira for time management and to assign tasks to team members</li>
                                    </ul>
                                <li> Designed and built Web App for the IoT platform and deployed onto Azure App Service</li>
                                    <ul>
                                        <li>Designed and built the Frontend with React.js and jQuery</li>
                                        <li>Built HTTP REST API backend using Node.js and Python</li>
                                    </ul>
                                <li> Designed a NoSQL database and deployed it on Cosmos DB</li>
                                <li> Set up MQTT/AMQP message brokers for message queuing and routing</li>
                                <li> Set up Azure Virtual Machines and Serverless functions</li>
                                <li> Used git and Bitbucket for version control and code integration</li>
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
                                <li> Develop internal tools for College of Engineering staffs and students</li>
                                <li> Developed web application to keeps track of each staff members room & equipment access</li>
                                <li> Developed web application to allows employees to record their working hours</li>
                                <li> Refactored and migrated from PHP to Node.js for Ph.D. evaluation Web App leading to a smoother experience for Ph.D. students to submit their thesis</li>
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