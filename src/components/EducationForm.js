import React, { Component } from "react";
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
    const educationId = e.target.closest('div').id;
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
              <div key={ educationItem.id } id={ educationItem.id }>
                <label htmlFor={`school-${educationItem.id}`}>School Name</label>
                <input type="text" value={ educationItem.school } id={`school-${educationItem.id}`} onChange={ this.handleInputChange } data-object-key="school"></input>

                <label htmlFor={`program-${educationItem.id}`}>Program</label>
                <input type="text" value={ educationItem.program } id={`program-${educationItem.id}`} onChange={ this.handleInputChange } data-object-key="program"></input>

                <label htmlFor={`start-${educationItem.id}`}>Start Date</label>
                <input type="text" value={ educationItem.startDate } id={`start-${educationItem.id}`} onChange={ this.handleInputChange } data-object-key="startDate"></input>

                <label htmlFor={`end-${educationItem.id}`}>End Date</label>
                <input type="text" value={ educationItem.endDate } id={`end-${educationItem.id}`} onChange={ this.handleInputChange } data-object-key="endDate"></input>

                <label htmlFor={`location-${educationItem.id}`}>School Location</label>
                <input type="text" value={ educationItem.location } id={`location-${educationItem.id}`} onChange={ this.handleInputChange } data-object-key="location"></input>

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
