import React, { Component } from "react";
import Resume from "./components/Resume";
import Form from "./components/Form";
import './App.css';
import uniqid from 'uniqid';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {
      resumeContent: {
        header: {
          name: 'Full Name',
          location: 'Location',
          phone: 'Phone #',
          email: 'Email',
        },
        skills: [],
        educationHistory: [
          {
            school: "School Name",
            program: "Program",
            location: "School Location",
            startDate: "Start Date",
            endDate: "End Date",
            id: uniqid(),
          },
          {
            school: "School Name",
            program: "Program",
            location: "School Location",
            startDate: "Start Date",
            endDate: "End Date",
            id: uniqid(),
          }
        ],
        workExperience: [
          {
            employerName: "Employer Name",
            location: "Employer Location",
            startDate: "Start Date",
            endDate: "End Date",
            jobTitle: "Job Title",
            details: [
              {
                text: "Job details (e.g., responsibilities, achievements, highlights)",
                id: uniqid(),
              }
            ],
            id: uniqid(),
          },
          {
            employerName: "Employer Name",
            location: "Employer Location",
            startDate: "Start Date",
            endDate: "End Date",
            jobTitle: "Job Title",
            details: [
              {
                text: "Job details (e.g., responsibilities, achievements, highlights)",
                id: uniqid(),
              }
            ],
            id: uniqid(),
          }
        ],
        projects: [
          {
            name: "Project Name",
            startDate: "Start Date",
            endDate: "End Date",
            details: [
              {
                text: "Project details (e.g., summary, achievments, lessons learned)",
                id: uniqid(),
              }
            ],
            id: uniqid(),
          },
          {
            name: "Project Name",
            startDate: "Start Date",
            endDate: "End Date",
            details: [
              {
                text: "Project details (e.g., summary, achievments, lessons learned)",
                id: uniqid(),
              }
            ],
            id: uniqid(),
          }
        ],
      }
    }
  }

  handleFormSubmit(newResumeContent) {
    this.setState({
      resumeContent: newResumeContent
    })
  }

  render() {
      return (
      <div className="App">
        <Form resumeContent={ this.state.resumeContent } handleFormSubmit={ this.handleFormSubmit } />
        <Resume resumeContent={ this.state.resumeContent }/>
      </div>
    );
  }
}

export default App;
