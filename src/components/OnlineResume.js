import React, { Component } from 'react';
import '../styles/OnlineResume.css';
import { CVInfo } from '../Config';
import ProgressBar from 'react-bootstrap/ProgressBar';

class OnlineResume extends Component {

    render() {

        const listEducation = CVInfo.education && CVInfo.education.map(education => 
                <div>
                 {education.group && <span className="valueStyle subHead"> {education.group} </span>} <br/>
                 {education.name && <span className="valueStyle subHead"> {education.name} </span> }<br/>
                 {education.year && <span className="valueStyle"> {education.year} </span>} <br/>
                 {education.specialty && <span className="valueStyle"> {education.specialty} </span> }<br/>
                <br/>
            </div>
        )
        const listExperience= CVInfo.experience && CVInfo.experience.map(experience => 
            <div>
             {experience.companyname &&<span className="valueStyle subHead"> {experience.companyname} </span> } 
            {experience.jobtitle && <span className="valueStyle subHead"> {experience.jobtitle} </span> }<br/>
        {experience.year && <span className="valueStyle"> {experience.year} </span>} <br/>
        {experience.responsibilities && <span className="valueStyle"> {experience.responsibilities} </span>} <br/>
            <br/>
            </div>
        )

        const listHobbies= CVInfo.hobbies && CVInfo.hobbies.map(hobbie => 
            <div>
             <span className="valueStyle"> {hobbie} </span><br/>
            </div>
        )
        const listSkills= CVInfo.skills && CVInfo.skills.map(skill => 
            <div class="row">
             {skill.skilName && <div className="valueStyle col-md-1"> {skill.skilName} </div>}
             {skill.percentage && <div className="col-md-9"><ProgressBar class="progress" now={skill.percentage} label={`${skill.percentage}%`} /></div>}<br/>
            </div>
        )
        return (
            <div className="container">
                <div >
                    <div className="row">
                        <div className="col-sm-12 col-md-5 col-lg-5  profile">
                            < img src={require('../images/mypic.jpg')} alt="Avatar" />
                        </div>

                        <div className="col-sm-12 col-md-7 col-lg-7 nameStyle">
                            {CVInfo.personalInfo.firstName &&
                                <div  >
                                    <span>  {CVInfo.personalInfo.firstName} </span>
                                </div>
                            }

                            <div className="occupationStyle">
                                {CVInfo.personalInfo.occupation &&
                                    <div>
                                        <span > {CVInfo.personalInfo.occupation} </span>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5 col-lg-5 col-sm-12">

                            {CVInfo.personalInfo.description &&
                                <div>
                                    <span className="keyStyle"> PROFILE:  </span> <br />
                                    <span className="valueStyle">  {CVInfo.personalInfo.description} </span>
                                </div>
                            }

                            {CVInfo.personalInfo.phone &&
                                <div>
                                    <span className="keyStyle"> CONTACT:  </span><br />
                                    <span className="keyStyle tempcolor"> PHONE:  </span> <br/>
                                    <span className="valueStyle" > {CVInfo.personalInfo.phone} </span>
                                </div>
                            }

                            {CVInfo.personalInfo.website &&
                                <div>
                                    <span className="keyStyle tempcolor"> WEBSITE:  </span> <br />
                                    <span className="valueStyle"><a href={CVInfo.personalInfo.website} > {CVInfo.personalInfo.website}</a> </span>
                                </div>
                            }

                            {CVInfo.personalInfo.email &&
                                <div>
                                    <span className="keyStyle tempcolor"> EMAIL:  </span> <br />
                                    <span className="valueStyle"> <a href={CVInfo.personalInfo.email} >{CVInfo.personalInfo.email}</a> </span>
                                </div>
                            }

                            {CVInfo.hobbies &&
                                <div>
                                    <span className="keyStyle"> HOBBIES:  </span> <br />
                                    {listHobbies}
                                </div>
                            }
                        </div>

                        <div className="col-md-7 col-lg-7 col-sm-12">
                            {CVInfo.education && <div>
                                    <span className="headStyle">EDUCATION</span> <br />
                                    {listEducation}
                                </div>
                            }
                            {CVInfo.experience && <div>
                                <span className="headStyle"> EXPERIENCE:</span> <br />
                                {listExperience}
                                </div>
                            }
                            {CVInfo.skills &&
                                <div>
                                    <span className="headStyle"> SKILLS:</span> <br />
                                    {listSkills}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OnlineResume;