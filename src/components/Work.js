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

/*
workExperience: [
  {
    employerName: "Canada Deposit Insurance Corporation",
    location: "Ottawa, ON",
    startDate: "October 2020",
    endDate: "Present",
    jobTitle: "Risk Manager",
    details: [
      "Developing internal tools in collaboration with data analytics team which help to improve efficiency in monitoring the economic environment and portfolio; internal tools have been widely adopted and integrated across the organization",
      "Managing a portfolio of medium- to large-sized banks; researching, analyzing, and presenting key findings and recommendations to senior management and stakeholders to identify, escalate, and address areas of concern",
    ]
  },
  {
    employerName: "Department of Finance Canada",
    location: "Ottawa, ON",
    startDate: "October 2017",
    endDate: "October 2020",
    jobTitle: "Economist",
    details: [
      "Produced analysis and developed models to analyze the impact of economic policy to support the Minister of Finance with timely, well-informed research and advice, including policy proposals with significant financial implications ($100M+)",
      "Streamlined and automated data analysis work to reduce time required for tasks and improve quality of analysis",
    ]
  }
]
*/