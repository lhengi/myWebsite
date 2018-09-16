import React,{Component} from 'react';

class Project extends Component{

    render(){

        return(

            <div>
                <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="projects">
                    <div className="my-auto">
                    <h2 className="mb-5">Projects</h2>
                    <ul className="fa-ul mb-0">
                        <li>
                        <i className="fa-li fa fa-trophy text-warning"></i>
                        First Place in <a href="https://builtworlds.com/news/results-heres-won-builtworlds-3rd-annual-hackathon/">BuiltWorlds hackathon, mHub</a></li>
                        <ul>
                            <li> Won first place out of 20+ teams by creating iPot (a LoRa WAN enabled sensor pack for portable toilets)</li>
                            <li> iPot collects data about the portable toilet and sends it to the cloud server via LoRa Network</li>
                            <li> Collected data can be used to optimize the best and most efficient service routes</li>
                            <li> This can enable a better customer experience and could potentially save the industry operation and maintenance cost</li>
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
        );
    }
}

export default Project;