import React, { Component } from "react";
import ResumeHeader from "./ResumeHeader";
import Skills from "./Skills";
import Education from "./Education";

import '../styles/Resume.css';

class Resume extends Component {
  render() {
    return (
      <div className='Resume'>
        <ResumeHeader
          name='Ayrton Parkinson'
          location='Ottawa, ON, Canada'
          phone='(613) 252-6800'
          email='Ayrton.Parkinson1@gmail.com'
        />
        <Skills
          skills={ ['Ruby', 'Ruby on Rails', 'HTML', 'CSS', 'JavaScript', 'React', 'Ruby', 'Ruby on Rails', 'HTML', 'CSS', 'JavaScript', 'React'] }
        />
        <Education
          educationHistory={[
            {
              school: "Queen's University",
              program: "Master of Arts in Economics",
              location: "Kingston, ON",
              startDate: "August 2016",
              endDate: "August 2017",
            },
            {
              school: "University of Ottawa",
              program: "Bachelor of Social Science in Economics",
              location: "Ottawa, ON",
              startDate: "August 2012",
              endDate: "April 2016",
            }
          ]}
        />
      </div>
    );
  }
}

export default Resume;
