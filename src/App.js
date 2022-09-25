import React, { Component } from "react";
import Resume from "./components/Resume";
import Form from "./components/Form";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.editResume = this.editResume.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);

    this.state = {
      resumeContent: {
        header: {},
        skills: [],
        educationHistory: [],
        workExperience: [],
        projects: [],
      },
      formActive: true,
      edit: false,
    }
  }

  handleFormSubmit(newResumeContent) {
    this.setState({
      resumeContent: newResumeContent,
      formActive: false,
    })
  }

  editResume() {
    this.setState({
      formActive: true,
      edit: true,
    });
  }

  cancelEdit() {
    this.setState({
      formActive: false,
    });
  }

  render() {
      const activeComponent = this.state.formActive
      ? <Form resumeContent={ this.state.resumeContent } handleFormSubmit={ this.handleFormSubmit } formActive={ this.state.formActive } edit={ this.state.edit } cancelEdit={ this.cancelEdit } />
      : <Resume resumeContent={ this.state.resumeContent } resumeHidden={ this.state.formActive } editResume={ this.editResume } />;

      return (
      <div className="App">
        <h1 className="App-header">CV Maker</h1>
        { activeComponent }
      </div>
    );
  }
}

export default App;
