import React, { Component } from "react";
import HeaderForm from "./HeaderForm";
import SkillsForm from "./SkillsForm";
import EducationForm from "./EducationForm";
import WorkForm from "./WorkForm";
import ProjectForm from "./ProjectForm";
import '../styles/Form.css';

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {...this.props.resumeContent}

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleHeaderChange = this.handleHeaderChange.bind(this);
    this.removeSkill = this.removeSkill.bind(this);
    this.removeEducation = this.removeEducation.bind(this);
    this.handleWorkDetailChange = this.handleWorkDetailChange.bind(this);
    this.removeWorkExperience = this.removeWorkExperience.bind(this);
    this.addWorkDetail = this.addWorkDetail.bind(this);
    this.removeWorkDetail = this.removeWorkDetail.bind(this);
    this.handleResumeSectionChange = this.handleResumeSectionChange.bind(this);
    this.addResumeSectionElement = this.addResumeSectionElement.bind(this);
  }

  handleResumeSectionChange(e) {
    const targetSection = e.target.closest('[data-section]').dataset.section;
    const targetIndex  = e.target.closest('[data-section-index]').dataset.sectionIndex;
    const targetKey = e.target.dataset.objectKey;
  
    this.setState(prevState => {
      const resumeSection = [...prevState[targetSection]];
      resumeSection[targetIndex] = { ...resumeSection[targetIndex], [targetKey]: e.target.value };
      return ({ [targetSection]: resumeSection })
    })
  }

  addResumeSectionElement(e, obj) {
    const targetSection = e.target.closest('[data-section]').dataset.section;
  
    this.setState({
      [targetSection]: this.state[targetSection].concat(obj)
    });
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

  addSkill(skillObj) {
    this.setState({
      skills: this.state.skills.concat(skillObj)
    });
  }

  removeSkill(e) {
    const targetIndex = e.target.closest('[data-skill-index]').dataset.skillIndex;
    const { skills } = this.state;

    if (targetIndex) {
      skills.splice(targetIndex, 1)
      this.setState({
        skills
      });
    }
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
        <SkillsForm skills={ skills } addSkill={ this.addResumeSectionElement } removeSkill={ this.removeSkill } />
        <EducationForm educationHistory={ educationHistory } handleChange={ this.handleResumeSectionChange } addEducation={ this.addResumeSectionElement } removeEducation={ this.removeEducation } />
        <WorkForm workExperience={ workExperience } handleChange={ this.handleResumeSectionChange } handleWorkDetailChange={ this.handleWorkDetailChange } addWorkExperience={ this.addResumeSectionElement } removeWorkExperience={ this.removeWorkExperience } addWorkDetail={ this.addWorkDetail } removeWorkDetail={ this.removeWorkDetail }/>
        <ProjectForm projects={ projects } handleChange={ this.handleResumeSectionChange } addProject={ this.addResumeSectionElement } />
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default Form;
