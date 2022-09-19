import React, { Component } from "react";
import ResumeHeader from "./ResumeHeader";
import Skills from "./Skills";
import Education from "./Education";
import Work from "./Work";
import Projects from './Projects';

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
        <Projects
          projects={
            [
              {
                name: "To-do List Web Application",
                startDate: "August 2022",
                endDate: "September 2022",
                details: [
                  "Developed to-do list tracking web application allowing users to create and keep track of projects using to-do lists",
                  "Integrated Web Storage API to use local storage to store and persist user data across browser sessions",
                  "Dynamic and mobile responsive front-end built with JavaScript, HTML, and CSS",
                ]
              },
              {
                name: "Social Media Web Application",
                startDate: "May 2022",
                endDate: "June 2022",
                details: [
                  "Designed, developed and deployed social media web application; application allows users to add friends and share, comment on, and like posts and photos with friends",
                  "Wrote tests for backend and frontend features to ensure the application continued to work throughout development, speed up development time, and minimize the potential for bugs in production",
                  "User uploads stored in cloud via Amazon S3. User welcome and confirmation emails sent through Twilio SendGrid API",
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
