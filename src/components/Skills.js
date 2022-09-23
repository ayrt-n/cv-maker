import React, { Component } from "react";
import '../styles/ResumeSection.css';
import '../styles/Skills.css';

class Skills extends Component {
  render() {
    return (
      <div className="Resume-Section">
        <h2 className="Resume-Section-title">Skills</h2>
        <div className="Skills-container">
          { this.props.skills.map((skill) => (<div key={ skill.id } className="Skills-bubble">{ skill.text }</div>)) }
        </div>
      </div>
    );
  }
}

export default Skills;
