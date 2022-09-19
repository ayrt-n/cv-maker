import React, { Component } from "react";
import '../styles/ResumeSection.css';
import '../styles/Skills.css';

class Skills extends Component {
  render() {
    return (
      <div className="Resume-Section">
        <h2 className="Resume-Section-title">Skills</h2>
        <div className="Skills-container">
          { this.props.skills.map((skill) => (<div className="Skills-bubble">{skill}</div>)) }
        </div>
      </div>
    );
  }
}

export default Skills;
