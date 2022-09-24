import React, { Component } from "react";
import InputFormField from "./InputFormField";
import NestedInputFormField from "./NestedInputFormField";
import FormSectionSubHeader from "./FormSectionSubHeader";
import LineButton from "./LineButton";
import '../styles/Form.css';
import uniqid from 'uniqid';

class WorkForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleWorkDetailChange = this.handleWorkDetailChange.bind(this);
    this.addWorkExperience = this.addWorkExperience.bind(this);
    this.removeWorkExperience = this.removeWorkExperience.bind(this);
    this.addWorkDetail = this.addWorkDetail.bind(this);
    this.removeWorkDetail = this.removeWorkDetail.bind(this);
  }

  createJobDescriptionObj() {
    return {
      text: 'Job details (e.g., responsibilities, achievements, highlights)',
      id: uniqid(),
    }
  }

  createWorkExperienceObj() {
    return {
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
  }

  handleChange(e) {
    this.props.handleChange(e);
  }

  handleWorkDetailChange(e) {
    this.props.handleWorkDetailChange(e);
  }

  addWorkExperience(e) {
    e.preventDefault();
    this.props.addWorkExperience(e, this.createWorkExperienceObj());
  }

  removeWorkExperience(e) {
    e.preventDefault();
    this.props.removeWorkExperience(e);
  }

  addWorkDetail(e) {
    e.preventDefault();
    this.props.addWorkDetail(e, this.createJobDescriptionObj());
  }

  removeWorkDetail(e) {
    e.preventDefault();
    this.props.removeWorkDetail(e);
  }

  render() {
    return (
      <div className="Form-section" data-section="workExperience">
        <h1 className="Form-section-header">Work Experience</h1>
        { this.props.workExperience.map((workItem, index) => {
            return(
              <div key={ workItem.id } data-section-index={ index } className="Form-sub-section">
                <FormSectionSubHeader section="Work Experience" index={ index } handleClick={ this.removeWorkExperience } />

                <InputFormField value={workItem.employerName} label="Employer Name" id={`employer-${workItem.id}`} objectKey="employerName" handleInputChange={this.handleChange} />
                <InputFormField value={workItem.location} label="Location" id={`location-${workItem.id}`} objectKey="location" handleInputChange={this.handleChange} />
                <InputFormField value={workItem.startDate} label="Start Date" id={`start-${workItem.id}`} objectKey="startDate" handleInputChange={this.handleChange} />
                <InputFormField value={workItem.endDate} label="End Date" id={`end-${workItem.id}`} objectKey="endDate" handleInputChange={this.handleChange} />

                <label htmlFor={`details-${workItem.id}`} className="label">Job Description</label>
                { workItem.details.map((detail, detail_index) => {
                      return (
                        <div key={ detail.id } data-nested-index={ detail_index }>
                          <NestedInputFormField value={ detail.text } id={`details-${workItem.id}`} objectKey="details" nestedObjectKey="text" handleInputChange={this.handleWorkDetailChange} handleClick={ this.removeWorkDetail } />
                        </div>
                      );
                    }
                  )
                }
                <button onClick={ this.addWorkDetail } data-object-key="details" className="button small light">Add Job Description</button>
              </div>
            );
          })
        }
        <LineButton handleClick={ this.addWorkExperience } text="Add Work Experience" />
      </div>
    );
  }
}

export default WorkForm;
