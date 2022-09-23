import React, { Component } from "react";
import InputFormField from "./InputFormField";
import '../styles/Form.css';
import uniqid from 'uniqid';

class EducationForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.removeEducation = this.removeEducation.bind(this);
  }

  handleChange(e) {
    this.props.handleChange(e);
  }

  createNewEducationObj() {
    return {
      school: "School Name",
      program: "Program",
      location: "School Location",
      startDate: "Start Date",
      endDate: "End Date",
      id: uniqid(),
    }
  }

  addEducation(e) {
    e.preventDefault();
    this.props.addEducation(this.createNewEducationObj());
  }

  removeEducation(e) {
    e.preventDefault();
    this.props.removeEducation(e)
  }

  render() {
    return (
      <div>
        { this.props.educationHistory.map((educationItem, index) => {
            return (
              <div key={ educationItem.id } data-section="educationHistory" data-section-index={ index }>
                <InputFormField value={ educationItem.school } label="School Name" id={ `school-${educationItem.id}` } objectKey="school" handleInputChange={ this.handleChange } />
                <InputFormField value={ educationItem.program } label="Program" id={ `program-${educationItem.id}` } objectKey="program" handleInputChange={ this.handleChange } />
                <InputFormField value={ educationItem.startDate } label="Start Date" id={ `start-${educationItem.id}` } objectKey="startDate" handleInputChange={ this.handleChange } />
                <InputFormField value={ educationItem.endDate } label="End Date" id={ `end-${educationItem.id}` } objectKey="endDate" handleInputChange={ this.handleChange } />
                <InputFormField value={ educationItem.location } label="Location" id={ `location-${educationItem.id}` } objectKey="location" handleInputChange={ this.handleChange } />

                <button onClick={this.removeEducation}>Delete</button>
              </div>
            );
          })
        }
        <button onClick={this.addEducation}>Add Education</button>
      </div>
    );
  }
}

export default EducationForm;
