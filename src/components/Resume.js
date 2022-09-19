import React, { Component } from "react";
import ResumeHeader from "./ResumeHeader";
import Skills from "./Skills";
import Education from "./Education";
import Work from "./Work";
import Projects from './Projects';

import '../styles/Resume.css';

class Resume extends Component {
  render() {
    const { header, skills, educationHistory, workExperience, projects } = this.props.resumeContent;

    return (
      <div className='Resume'>
        <ResumeHeader
          headerContent={ header }
        />
        <Skills
          skills={ skills }
        />
        <Education
          educationHistory={ educationHistory }
        />
        <Work
          workExperience={ workExperience }
        />
        <Projects
          projects={ projects }
        />
      </div>
    );
  }
}

export default Resume;
