import React, { Component } from 'react';
import me from '../me_resize.png'
import '../css/rsm.css';

class App extends Component {
  render() {
    return (
        <div className="container">
            <div className="item-left">
                <div className="item">
                    <div class="picture">
                        <img className="image" alt="profile" src={me} />
                    </div>
                    <h2>Name : Witthaya Luanghirun</h2>
                    <p>
                    A person who love coding and analyze to solve the problem.
                    </p>
                    <div className="title">Skill</div>
                        <div className="skillSet"></div>
                            <p>Python</p>
                            <div class="skill-container">
                            <div class="skills python">80%</div>
                            </div>

                            <p>Java</p>
                            <div class="skill-container">
                            <div class="skills java">70%</div>
                            </div>

                            <p>Javascript</p>
                            <div class="skill-container">
                            <div class="skills js">65%</div>                        </div>

                            <p>HTML</p>
                            <div class="skill-container">
                            <div class="skills html">50%</div>
                            </div>

                            <p>CSS</p>
                            <div class="skill-container">
                            <div class="skills css">50%</div>
                            </div>

                            <p>PHP</p>
                            <div class="skill-container">
                            <div class="skills php">20%</div>
                            </div>
                    </div>
                </div>
            
            
            
            <div className="item-right">
                <div className="title">Experience</div>
                    <div className="item">
                        <p className="exp">
                              November 2016 – Present
                        <br/> <span>•</span> <b>Software Engineer</b> 
                        <br/> Bombardier Transportation Signal (Thailand) Ltd.
                        <br/> (Worldwide Company)
                        <br/> (Railway Transportation Solution)
                        <br/> Maintain Test process, 
                        <br/> > Create Test Specification and Test cases according to the requirements
                        <br/> > Create Requirement Traceability Matrix
                        <br/> > Prepare Test Environments (both manual and automated test)
                        <br/> > Perform Test execution 
                        <br/> > Report non-conformance defect and follow up
                        <br/> 
                        <br/> Test Type
                        <br/> - Logic Formal verification Test (with SMT framework)
                        <br/> - Logic Functional Test 
                        <br/> - Subsystem Integration Test
                        <br/> - Subsystem Test
                        <br/> 
                        <br/> January 2011 - July 2012
                        <br/> <span>•</span> <b>QG Engineer</b>  
                        <br/> Michelin Siam Co., Ltd.(PPD factory) 
                        <br/> (Worldwide Company)
                        <br/> (Passenger car, Light truck and Motorcycle tire product)
                        <br/> 
                        <br/> January 2009 - August 2010
                        <br/> <span>•</span> <b>QA Engineer</b> 
                        <br/> Luckytex (Thailand) Public Co., Ltd. (Mill No.3) 
                        <br/> (Japanese - Thai Company)
                        <br/> (Airbag and Cord Product)
                        </p>
                </div>
                <div className="title">Education</div>
                    <div className="content">
                    <p>
                              Master degree of Science, Chulalongkorn University, 2016 
                        <br/> Major: Software Engineering  
                        <br/> GPA: 3.63 
                        <br/>
                        <br/> Bachelor degree of Engineering, Silpakorn University, 2006
                        <br/> Major: petrochemical and polymeric materials
                        <br/> GPA: 2.61
                    </p>
                    </div>
            </div>
        </div>
    );
  }
}

export default App;
