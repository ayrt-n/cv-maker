import React, { Component } from "react";
import HeaderForm from "./HeaderForm";
import EducationForm from "./EducationForm";
import WorkForm from "./WorkForm";
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
    this.handleWorkChange = this.handleWorkChange.bind(this);
    this.handleWorkDetailChange = this.handleWorkDetailChange.bind(this);
    this.addWorkExperience = this.addWorkExperience.bind(this);
    this.removeWorkExperience = this.removeWorkExperience.bind(this);
    this.addWorkDetail = this.addWorkDetail.bind(this);
    this.removeWorkDetail = this.removeWorkDetail.bind(this);
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
    const targetIndex = e.target.closest('[data-education-index]').dataset.educationIndex;
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
    });
  }

  removeEducation(e) {
    const targetIndex = e.target.closest('[data-education-index]').dataset.educationIndex;
    const { educationHistory } = this.state;

    if (targetIndex) {
      educationHistory.splice(targetIndex, 1);
      this.setState({
        educationHistory
      });
    }
  }

  handleWorkChange(e) {
    const targetIndex  = e.target.closest('[data-work-index]').dataset.workIndex;
    const targetKey = e.target.dataset.objectKey;
    const { workExperience } = this.state;

    if (targetIndex) {
      console.log('hi');
      workExperience[targetIndex][targetKey] = e.target.value;
      this.setState({
        workExperience
      });
    }
  }

  handleWorkDetailChange(e) {
    const targetIndex  = e.target.closest('[data-work-index]').dataset.workIndex;
    const targetDetailIndex = e.target.closest('[data-work-detail-index]').dataset.workDetailIndex;
    const targetKey = e.target.dataset.objectKey;
    const { workExperience } = this.state;

    if (targetIndex && targetDetailIndex) {
      workExperience[targetIndex][targetKey][targetDetailIndex].text = e.target.value;
      this.setState({ workExperience });
    }
  }

  addWorkExperience(emptyWorkExperienceObj) {
    this.setState({
      workExperience: this.state.workExperience.concat(emptyWorkExperienceObj)
    });
  }

  removeWorkExperience(e) {
    const targetIndex = e.target.closest('[data-work-index]').dataset.workIndex;
    const { workExperience } = this.state;

    if (targetIndex) {
      workExperience.splice(targetIndex, 1);
      this.setState({
        workExperience
      });
    }
  }

  addWorkDetail(e, emptyWorkDetailObj) {
    const targetIndex  = e.target.closest('[data-work-index]').dataset.workIndex;
    const { workExperience } = this.state;
    
    if (targetIndex) {
      workExperience[targetIndex]['details'] = workExperience[targetIndex]['details'].concat(emptyWorkDetailObj);

      this.setState({
        workExperience
      });
    }
  }

  removeWorkDetail(e) {
    const targetIndex  = e.target.closest('[data-work-index]').dataset.workIndex;
    const targetDetailIndex = e.target.closest('[data-work-detail-index]').dataset.workDetailIndex;
    const targetKey = e.target.dataset.objectKey;
    const { workExperience } = this.state;

    if (targetIndex && targetDetailIndex) {
      workExperience[targetIndex][targetKey].splice(targetDetailIndex, 1);
      this.setState({ workExperience });
    }
  }

  render() {
    const { header, skills, educationHistory, workExperience, projects } = this.state;

    return (
      <form onSubmit={ this.handleFormSubmit }>
        <HeaderForm header={ header } handleChange={ this.handleHeaderChange } />
        <EducationForm educationHistory={ educationHistory } handleChange={ this.handleEducationChange } addEducation={ this.addEducation } removeEducation={ this.removeEducation } />
        <WorkForm workExperience={ workExperience } handleChange={ this.handleWorkChange } handleWorkDetailChange={ this.handleWorkDetailChange } addWorkExperience={ this.addWorkExperience } removeWorkExperience={ this.removeWorkExperience } addWorkDetail={ this.addWorkDetail } removeWorkDetail={ this.removeWorkDetail }/>
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default Form;
