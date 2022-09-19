import React, { Component } from "react";
import '../styles/ResumeSection.css';
import '../styles/Education.css';

class Education extends Component {
  render() {
    return (
      <div className="Resume-Section">
        <h2 className="Resume-Section-title">Education</h2>
        <div className="Education-container">
          {this.props.educationHistory.map((educationItem) => {
              return (
                <div className="Education-item">
                  <div className="Education-item-header">
                    <div className="Education-item-details">{ educationItem.program } | { educationItem.school }</div>
                    <div className="Education-item-date">{ educationItem.startDate } - { educationItem.endDate }</div>
                  </div>
                  <div className="Education-item-location">{ educationItem.location }</div>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default Education;

/*
education: [
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
]
*/