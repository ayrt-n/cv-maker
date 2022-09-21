import React, { Component } from "react";
import HeaderForm from "./HeaderForm";
import EducationForm from "./EducationForm";
import '../styles/Form.css';

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {...this.props.resumeContent}

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleHeaderChange = this.handleHeaderChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.removeEducation = this.removeEducation.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.props.handleFormSubmit(this.state);
  }

  handleHeaderChange(e) {
    const tmpHeader = {...this.state.header}
    tmpHeader[e.target.id] = e.target.value

    this.setState({
      header: tmpHeader
    })
  }

  handleEducationChange(e) {
    const targetIndex = e.target.closest('[data-education-index]').dataset.educationIndex
    const targetKey = e.target.dataset.objectKey;
    const { educationHistory } = this.state;

    if (targetIndex) {
      educationHistory[targetIndex][targetKey] = e.target.value;
      this.setState({
        educationHistory
      });
    }
  }

  addEducation(emptyEducationObj) {
    this.setState({
      educationHistory: this.state.educationHistory.concat(emptyEducationObj)
    })
  }

  removeEducation(e) {
    const targetIndex = e.target.closest('[data-education-index]').dataset.educationIndex
    const { educationHistory } = this.state;

    if (targetIndex) {
      educationHistory.splice(targetIndex, 1);
      this.setState({
        educationHistory
      });
    }
  }

  render() {
    const { header, skills, educationHistory, workExperience, projects } = this.state;

    return (
      <form onSubmit={ this.handleFormSubmit }>
        <HeaderForm header={ header } handleChange={ this.handleHeaderChange } />
        <EducationForm educationHistory={ educationHistory } handleChange={ this.handleEducationChange } addEducation={ this.addEducation } removeEducation={ this.removeEducation } />
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default Form;
