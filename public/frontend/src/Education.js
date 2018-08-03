import React, { Component } from 'react';

class Education extends Component{
    render(){

        return(

            <div>
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


            </div>
        );
    }
}

export default Education;