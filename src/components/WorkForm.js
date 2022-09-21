import React, { Component } from "react";
import '../styles/Form.css';

class WorkForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workExperience: this.props.resumeContent.workExperience,
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const workId = e.target.closest('div').id;
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

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.workExperience);
  }

  render() {
    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        { this.state.workExperience.map((workItem) => {
          return(
            <div key={ workItem.id } id={ workItem.id }>
              <label htmlFor={`employer-${workItem.id}`}>Employer Name</label>
              <input type="text" value={ workItem.employerName } id={`employer-${workItem.id}`} data-object-key="employerName" onChange={this.handleInputChange}></input>

              <label htmlFor={`location-${workItem.id}`}>Location</label>
              <input type="text" value={ workItem.location } id={`location-${workItem.id}`} data-object-key="location" onChange={this.handleInputChange}></input>

              <label htmlFor={`start-${workItem.id}`}>Start Date</label>
              <input type="text" value={ workItem.startDate } id={`start-${workItem.id}`} data-object-key="startDate" onChange={this.handleInputChange}></input>

              <label htmlFor={`end-${workItem.id}`}>End Date</label>
              <input type="text" value={ workItem.endDate } id={`end-${workItem.id}`} data-object-key="endDate" onChange={this.handleInputChange}></input>
            </div>
          );
        })}
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default WorkForm;
