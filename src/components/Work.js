import React, { Component } from "react";
import '../styles/Work.css';
import '../styles/ResumeSection.css';

class Work extends Component {
  render() {
    return (
      <div className="Resume-Section">
        <h2 className="Resume-Section-title">Work Experience</h2>
        <div className="Work-container">
          {this.props.workExperience.map((work) => {
              return (
                <div className="Work-item">
                  <div className="Work-item-header">
                    <div className="Work-item-details">{ work.employerName } | { work.location }</div>
                    <div className="Work-item-date">{ work.startDate } - { work.endDate }</div>
                  </div>
                  <ul className="Work-details">
                    {work.details.map((detail) => (<li className="Work-bullet-point">{detail}</li>))}
                  </ul>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default Work;