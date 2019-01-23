
import React, {Component} from 'react';

class Interest extends Component{

    render(){

        var paragraph = `Other than web Development and Embeded System Development. I'm also looking 
        forward to learn more new technologies. Such as, iOS and Android Development, and also
        Mechine Learning, AI, High Performance Computing`;

        return(

            <div>

                <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
                    <div className="my-auto">
                    <h2 className="mb-5">Relevant Coursework</h2>
			<br/>
			<h3 className="mb-0">Courses Completed</h3>
			<ul className="fa-ul mb-0">
			    <li>Data Structures</li>
			    <li>Computer Design</li>
			    <li>Programming Language Concepts</li>
			    <li>Software Design</li>
			    <li>Systems Programming</li>
			    <li>Algorithm</li>
			    <li>Machine Learning</li>
			    <li>Data Science</li>
			    <li>Mobile Development</li>
			    <li>Alogrithms in Practice</li>
			</ul>
		    <br/>
		    <h3 className="mb-0">Courses In Progress</h3>
			<ul className="fa-ul mb-0">
			    <li>Cloud Computing</li>
			    <li>Natural Language Processing</li>
			    <li>Web Development</li>
			    

			</ul>
                    </div>
                </section>


            </div>
        );
    }
}

export default Interest;
