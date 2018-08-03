import React,{Component} from 'react';
import 'devicon';

class Skills extends Component{

    render(){

        var skillsIcons = ["devicon-c-plain", "devicon-cplusplus-plain", "devicon-java-plain-wordmark",
        "devicon-python-plain-wordmark", "devicon-csharp-plain" , "devicon-javascript-plain",
        "devicon-nodejs-plain-wordmark", "devicon-express-plain-wordmark", "devicon-react-plain-wordmark",
        "devicon-mongodb-plain-wordmark", "devicon-mysql-plain", "devicon-git-plain",
        "devicon-ubuntu-plain", "devicon-linux-plain", "devicon-html5-plain-wordmark",
        "devicon-css3-plain-wordmark"];
        var experienceIcons = ["devicon-php-plain"];

        return(

            <div>
                <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
                <div className="my-auto">
                    <h2 className="mb-5">Skills</h2>
                    <div className="subheading mb-3">Programming Languages &amp; Tools</div>
                    <ul className="list-inline list-icons">

                        {
                            skillsIcons.map(function(icon,i){
                                return <li className="list-inline-item">
                                            <i key = {i} className={icon}></i>
                                    </li>;
                            })
                        }
                        
                        
                    </ul>
                    <div className="subheading mb-3">Prior Experience With</div>
                    <ul className="list-inline list-icons">
                        {
                            experienceIcons.map(function(icon,i){
                                return <li className="list-inline-item">
                                            <i key={i} className={icon}/>
                                        </li>;
                            })
                        }
                    
                    </ul>
                    </div>
                </section>



            </div>


        );
    }
}

export default Skills;