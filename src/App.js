import React, { Component } from "react";
import Resume from "./components/Resume";
import Form from "./components/Form";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {
      resumeContent: {
        header: {},
        skills: [],
        educationHistory: [],
        workExperience: [],
        projects: [],
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
