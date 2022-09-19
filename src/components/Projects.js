import React, { Component } from "react";
import '../styles/Projects.css';
import '../styles/ResumeSection.css';

class Projects extends Component {
  render() {
    return (
      <div className="Resume-Section">
        <h2 className="Resume-Section-title">Projects</h2>
        <div className="Projects-container">
          {this.props.projects.map((project) => {
              return (
                <div className="Projects-item" key={ project.id }>
                  <div className="Projects-item-header">
                    <div className="Projects-item-details">{ project.name }</div>
                    <div className="Projects-item-date">{ project.startDate } - { project.endDate }</div>
                  </div>
                  <ul className="Projects-details">
                    { project.details.map((detail) => {
                        return (
                          <li className="Projects-bullet-point" key={ detail.id }>{ detail.text }</li>
                        )
                      })
                    }
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

export default Projects;

/*
projects: [
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
    projectName: "Social Media Web Application",
    startDate: "May 2022",
    endDate: "June 2022",
    details: [
      "Designed, developed and deployed social media web application; application allows users to add friends and share, comment on, and like posts and photos with friends",
      "Wrote tests for backend and frontend features to ensure the application continued to work throughout development, speed up development time, and minimize the potential for bugs in production",
      "User uploads stored in cloud via Amazon S3. User welcome and confirmation emails sent through Twilio SendGrid API",
    ]
  }
]
*/