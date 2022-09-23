import React, { Component } from "react";
import InputFormField from "./InputFormField";
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
      <div data-section="workExperience">
        { this.props.workExperience.map((workItem, index) => {
            return(
              <div key={ workItem.id } data-section-index={ index }>
                <InputFormField value={workItem.employerName} label="Employer Name" id={`employer-${workItem.id}`} objectKey="employerName" handleInputChange={this.handleChange} />
                <InputFormField value={workItem.location} label="Location" id={`location-${workItem.id}`} objectKey="location" handleInputChange={this.handleChange} />
                <InputFormField value={workItem.startDate} label="Start Date" id={`start-${workItem.id}`} objectKey="startDate" handleInputChange={this.handleChange} />
                <InputFormField value={workItem.endDate} label="End Date" id={`end-${workItem.id}`} objectKey="endDate" handleInputChange={this.handleChange} />

                <label htmlFor={`details-${workItem.id}`}>Job Description</label>
                { workItem.details.map((detail, detail_index) => {
                      return (
                        <div key={ detail.id } data-nested-index={ detail_index }>
                          <input type="text" value={ detail.text } id={`details-${workItem.id}`} data-object-key="details" data-nested-object-key="text" onChange={this.handleWorkDetailChange}></input>
                          <button onClick={ this.removeWorkDetail } data-object-key="details">Remove Job Description</button>
                        </div>
                      );
                    }
                  )
                }
                <button onClick={ this.addWorkDetail }>Add Job Description</button>
                <button onClick={ this.removeWorkExperience }>Remove Work Experience</button>
              </div>
            );
          })
        }
        <button onClick={ this.addWorkExperience }>Add Work Experience</button>
      </div>
    );
  }
}

export default WorkForm;
