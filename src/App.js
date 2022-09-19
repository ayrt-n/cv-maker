import React, { Component } from "react";
import Resume from "./components/Resume";
import './App.css';
import uniqid from 'uniqid';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resumeContent: {
        header: {
          name: 'First Last',
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
          }
        ],
      }
    }
  }

  render() {
      return (
      <div className="App">
        <Resume resumeContent={ this.state.resumeContent }/>
      </div>
    );
  }
}

export default App;
