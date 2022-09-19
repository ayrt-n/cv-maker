import React, { Component } from "react";
import ResumeHeader from "./ResumeHeader";
import Skills from "./Skills";
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
          title='Skills'
          skills={ ['Ruby', 'Ruby on Rails', 'HTML', 'CSS', 'JavaScript', 'React', 'Ruby', 'Ruby on Rails', 'HTML', 'CSS', 'JavaScript', 'React'] }
        />
      </div>
    );
  }
}

export default Resume;
