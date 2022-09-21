import React, { Component } from "react";
import InputFormField from "./InputFormField";
import '../styles/Form.css';
import uniqid from 'uniqid';

class WorkForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workExperience: this.props.resumeContent.workExperience,
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNestedInputChange = this.handleNestedInputChange.bind(this);
    this.addJobDescription = this.addJobDescription.bind(this);
  }

  createJobDescriptionBullet() {
    return {
      text: '',
      id: uniqid(),
    }
  }

  handleInputChange(e) {
    const workId = e.target.closest('div.workItem').id;
    const { workExperience } = this.state;

    const targetIndex = workExperience.findIndex((workItem) => (workItem.id === workId));
    const targetKey = e.target.dataset.objectKey;

    if (targetIndex !== -1) {
      workExperience[targetIndex][targetKey] = e.target.value;
      this.setState({
        workExperience
      });
    }
  }

  handleNestedInputChange(e) {
    const workId = e.target.closest('div.workItem').id;
    const detailId = e.target.closest('div').id;
    const { workExperience } = this.state;

    const targetIndex = workExperience.findIndex((workItem) => (workItem.id === workId));
    const targetSubIndex = workExperience[targetIndex]['details'].findIndex((detail) => (detail.id === detailId));
    
    if (targetIndex !== -1 && targetSubIndex !== -1) {
      workExperience[targetIndex]['details'][targetSubIndex].text = e.target.value

      this.setState({
        workExperience
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.workExperience);
  }

  addJobDescription(e) {
    const workId = e.target.closest('div.workItem').id;
    const { workExperience } = this.state;

    const targetIndex = workExperience.findIndex((workItem) => (workItem.id === workId));
    
    if (targetIndex !== -1) {
      workExperience[targetIndex]['details'] = workExperience[targetIndex]['details'].concat(this.createJobDescriptionBullet());

      this.setState({
        workExperience
      });
    }
  }

  render() {
    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        { this.state.workExperience.map((workItem) => {
          return(
            <div key={ workItem.id } id={ workItem.id } className="workItem">
              <InputFormField value={workItem.employerName} label="Employer Name" id={`employer-${workItem.id}`} objectKey="employerName" handleInputChange={this.handleInputChange} />
              <InputFormField value={workItem.location} label="Location" id={`location-${workItem.id}`} objectKey="location" handleInputChange={this.handleInputChange} />
              <InputFormField value={workItem.startDate} label="Start Date" id={`start-${workItem.id}`} objectKey="startDate" handleInputChange={this.handleInputChange} />
              <InputFormField value={workItem.endDate} label="End Date" id={`end-${workItem.id}`} objectKey="endDate" handleInputChange={this.handleInputChange} />

              <label htmlFor={`details-${workItem.id}`}>Job Description</label>
              { workItem.details.map((detail) => {
                    return (
                      <div key={ detail.id } id={ detail.id }>
                        <input type="text" value={ detail.text } id={`details-${workItem.id}`} onChange={this.handleNestedInputChange}></input>
                      </div>
                    );
                  }  
                )
              }
              <button onClick={this.addJobDescription}>Add Job Description</button>
            </div>
          );
        })}
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default WorkForm;

// employerName: "Employer Name",
// location: "Employer Location",
// startDate: "Start Date",
// endDate: "End Date",
// jobTitle: "Job Title",
// details: [
//   {
//     text: "Job details (e.g., responsibilities, achievements, highlights)",
//     id: uniqid(),
//   }
// ],
// id: uniqid(),