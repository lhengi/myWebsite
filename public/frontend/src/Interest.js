
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
                    <h2 className="mb-5">Interests</h2>
                    <p> {paragraph}</p>
                    </div>
                </section>


            </div>
        );
    }
}

export default Interest;