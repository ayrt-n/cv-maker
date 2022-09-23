import React, { Component } from "react";
import HeaderForm from "./HeaderForm";
import SkillsForm from "./SkillsForm";
import EducationForm from "./EducationForm";
import WorkForm from "./WorkForm";
import ProjectForm from "./ProjectForm";
import uniqid from 'uniqid';
import '../styles/Form.css';

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {...this.props.resumeContent}

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleHeaderChange = this.handleHeaderChange.bind(this);
    this.addWorkDetail = this.addWorkDetail.bind(this);
    this.removeWorkDetail = this.removeWorkDetail.bind(this);
    this.handleResumeSectionChange = this.handleResumeSectionChange.bind(this);
    this.handledNestedResumeChange = this.handledNestedResumeChange.bind(this);
    this.addResumeSectionElement = this.addResumeSectionElement.bind(this);
    this.removeResumeSectionElement = this.removeResumeSectionElement.bind(this);
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

  handledNestedResumeChange(e) {
    const targetSection = e.target.closest('[data-section]').dataset.section;
    const targetIndex  = e.target.closest('[data-section-index]').dataset.sectionIndex;
    const targetKey = e.target.dataset.objectKey;
    const targetNestedIndex = e.target.closest('[data-nested-index]').dataset.nestedIndex;
    const targetNestedKey = e.target.dataset.nestedObjectKey;
  
    this.setState(prevState => {
      const resumeSection = [...prevState[targetSection]];
      const resumeNestedSection = [...resumeSection[targetIndex][targetKey]]
      resumeNestedSection[targetNestedIndex] = { ...resumeNestedSection[targetNestedIndex], [targetNestedKey]: e.target.value }
      resumeSection[targetIndex] = { ...resumeSection[targetIndex], [targetKey]: resumeNestedSection };

      return ({ [targetSection]: resumeSection })
    })
  }

  addResumeSectionElement(e, obj) {
    const targetSection = e.target.closest('[data-section]').dataset.section;
  
    this.setState({
      [targetSection]: this.state[targetSection].concat(obj)
    });
  }

  removeResumeSectionElement(e) {
    const targetSection = e.target.closest('[data-section]').dataset.section;
    const targetIndex = e.target.closest('[data-section-index]').dataset.sectionIndex;
    
    this.setState(prevState => {
      const resumeSection = [...prevState[targetSection]];
      resumeSection.splice(targetIndex, 1);
      return ({ [targetSection]: resumeSection })
    })
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
        <SkillsForm skills={ skills } addSkill={ this.addResumeSectionElement } removeSkill={ this.removeResumeSectionElement } />
        <EducationForm educationHistory={ educationHistory } handleChange={ this.handleResumeSectionChange } addEducation={ this.addResumeSectionElement } removeEducation={ this.removeResumeSectionElement } />
        <WorkForm workExperience={ workExperience } handleChange={ this.handleResumeSectionChange } handleWorkDetailChange={ this.handledNestedResumeChange } addWorkExperience={ this.addResumeSectionElement } removeWorkExperience={ this.removeResumeSectionElement } addWorkDetail={ this.addWorkDetail } removeWorkDetail={ this.removeWorkDetail }/>
        <ProjectForm projects={ projects } handleChange={ this.handleResumeSectionChange } addProject={ this.addResumeSectionElement } removeProject={ this.removeResumeSectionElement } handleProjectDetailChange={ this.handledNestedResumeChange } />
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default Form;
