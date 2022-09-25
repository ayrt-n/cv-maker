import React, { Component } from "react";
import ResumeHeader from "./ResumeHeader";
import Skills from "./Skills";
import Education from "./Education";
import Work from "./Work";
import Projects from './Projects';

import '../styles/Resume.css';
import '../styles/Form.css';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.editResume = this.editResume.bind(this);
  }

  editResume() {
    this.props.editResume();
  }

  render() {
    const { header, skills, educationHistory, workExperience, projects } = this.props.resumeContent;

    return (
      <div className="Resume-container">
        <button onClick={ this.editResume } className="Resume-edit button">Edit Resume</button>
        <div className='Resume'>
          <ResumeHeader headerContent={ header } />
          <Skills skills={ skills } />
          <Education educationHistory={ educationHistory } />
          <Work workExperience={ workExperience } />
          <Projects projects={ projects } />
        </div>
      </div>
    );
  }
}

export default Resume;
