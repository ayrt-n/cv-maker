import React, { Component } from "react";
import InputFormField from "./InputFormField";
import '../styles/Form.css';
import uniqid from 'uniqid';

class EducationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      educationHistory: this.props.resumeContent.educationHistory,
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.removeEducation = this.removeEducation.bind(this);
  }

  createNewEducationHistory() {
    return {
      school: "School Name",
      program: "Program",
      location: "School Location",
      startDate: "Start Date",
      endDate: "End Date",
      id: uniqid(),
    }
  }

  handleInputChange(e) {
    const educationId = e.target.closest('div.educationItem').id;
    const { educationHistory } = this.state;

    const targetIndex = educationHistory.findIndex((educationItem) => (educationItem.id === educationId));
    const targetKey = e.target.dataset.objectKey;

    if (targetIndex !== -1) {
      educationHistory[targetIndex][targetKey] = e.target.value;
      this.setState({
        educationHistory
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.educationHistory);
  }

  addEducation(e) {
    e.preventDefault();
    this.setState({
      educationHistory: this.state.educationHistory.concat(this.createNewEducationHistory())
    })
  }

  removeEducation(e) {
    e.preventDefault();
    const educationId = e.target.closest('div').id;
    const { educationHistory } = this.state;
    const targetIndex = educationHistory.findIndex((educationItem) => (educationItem.id === educationId));

    if (targetIndex !== -1) {
      this.setState({
        educationHistory: educationHistory.slice(0, targetIndex).concat(educationHistory.slice(targetIndex + 1))
      });
    }
  }

  render() {
    return (
      <form className="Form" onSubmit={ this.handleSubmit }>
        { this.state.educationHistory.map((educationItem) => {
            return (
              <div key={ educationItem.id } id={ educationItem.id } className="educationItem">
                <InputFormField value={ educationItem.school } label="School Name" id={ `school-${educationItem.id}` } objectKey="school" handleInputChange={ this.handleInputChange } />
                <InputFormField value={ educationItem.program } label="Program" id={ `program-${educationItem.id}` } objectKey="program" handleInputChange={ this.handleInputChange } />
                <InputFormField value={ educationItem.startDate } label="Start Date" id={ `start-${educationItem.id}` } objectKey="startDate" handleInputChange={ this.handleInputChange } />
                <InputFormField value={ educationItem.endDate } label="End Date" id={ `end-${educationItem.id}` } objectKey="endDate" handleInputChange={ this.handleInputChange } />
                <InputFormField value={ educationItem.location } label="Location" id={ `location-${educationItem.id}` } objectKey="location" handleInputChange={ this.handleInputChange } />

                <button onClick={this.removeEducation}>Delete</button>
              </div>
            );
          })
        }
        <button onClick={this.addEducation}>Add Education</button>
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default EducationForm;
