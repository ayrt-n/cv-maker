import React, { Component } from "react";
import InputFormField from "./InputFormField";
import LineButton from "./LineButton";
import FormSectionSubHeader from "./FormSectionSubHeader";
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
      school: "",
      program: "",
      location: "",
      startDate: "",
      endDate: "",
      id: uniqid(),
    }
  }

  addEducation(e) {
    e.preventDefault();
    this.props.addEducation(e, this.createNewEducationObj());
  }

  removeEducation(e) {
    e.preventDefault();
    this.props.removeEducation(e)
  }

  render() {
    return (
      <div className="Form-section" data-section="educationHistory">
        <h1 className="Form-section-header">Education History</h1>
        { this.props.educationHistory.map((educationItem, index) => {
            return (
              <div key={ educationItem.id } data-section-index={ index } className="Form-sub-section">
                <FormSectionSubHeader section="Education" index={ index } handleClick={ this.removeEducation } />

                <InputFormField value={ educationItem.school } label="School Name" id={ `school-${educationItem.id}` } objectKey="school" handleInputChange={ this.handleChange } />
                <InputFormField value={ educationItem.program } label="Program" id={ `program-${educationItem.id}` } objectKey="program" handleInputChange={ this.handleChange } />
                <InputFormField value={ educationItem.startDate } label="Start Date" id={ `start-${educationItem.id}` } objectKey="startDate" handleInputChange={ this.handleChange } />
                <InputFormField value={ educationItem.endDate } label="End Date" id={ `end-${educationItem.id}` } objectKey="endDate" handleInputChange={ this.handleChange } />
                <InputFormField value={ educationItem.location } label="Location" id={ `location-${educationItem.id}` } objectKey="location" handleInputChange={ this.handleChange } />
              </div>
            );
          })
        }
        <LineButton handleClick={ this.addEducation } text="Add Education" />
      </div>
    );
  }
}

export default EducationForm;
