import React, { Component } from "react";
import ResumeHeader from "./ResumeHeader";
import Skills from "./Skills";
import Education from "./Education";
import Work from "./Work";

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
        <Work
          workExperience={
            [
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
          }
        />
      </div>
    );
  }
}

export default Resume;
