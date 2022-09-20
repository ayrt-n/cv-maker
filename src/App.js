import React, { Component } from "react";
import Resume from "./components/Resume";
import HeaderForm from "./components/HeaderForm";
import './App.css';
import uniqid from 'uniqid';

class App extends Component {
  constructor(props) {
    super(props);

    this.onHeaderSubmitHandler = this.onHeaderSubmitHandler.bind(this);

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

  onHeaderSubmitHandler(formState) {
    const { name, location, phone, email } = formState;
    const tmpState = {...this.state};
    tmpState.resumeContent.header.name = name;
    tmpState.resumeContent.header.location = location;
    tmpState.resumeContent.header.phone = phone;
    tmpState.resumeContent.header.email = email;
    this.setState({ tmpState });
  }

  render() {
      return (
      <div className="App">
        <HeaderForm resumeContent={ this.state.resumeContent } onSubmitHandler={this.onHeaderSubmitHandler} />
        <Resume resumeContent={ this.state.resumeContent }/>
      </div>
    );
  }
}

export default App;
