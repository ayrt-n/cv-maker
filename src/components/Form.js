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

    this.handleHeaderChange = this.handleHeaderChange.bind(this);
    this.handleResumeSectionChange = this.handleResumeSectionChange.bind(this);
    this.handledNestedResumeChange = this.handledNestedResumeChange.bind(this);
    this.addResumeSectionElement = this.addResumeSectionElement.bind(this);
    this.removeResumeSectionElement = this.removeResumeSectionElement.bind(this);
    this.addNestedResumeElement = this.addNestedResumeElement.bind(this);
    this.removeNestedResumeElement = this.removeNestedResumeElement.bind(this);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
  }

  handleHeaderChange(e) {
    const tmpHeader = {...this.state.header}
    tmpHeader[e.target.id] = e.target.value

    this.setState({
      header: tmpHeader
    })
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

    console.log(targetSection, targetIndex, targetKey, targetNestedIndex, targetNestedKey)
  
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

  addNestedResumeElement(e, obj) {
    const targetSection = e.target.closest('[data-section]').dataset.section;
    const targetIndex  = e.target.closest('[data-section-index]').dataset.sectionIndex;
    const targetKey = e.target.dataset.objectKey;

    console.log(targetIndex, targetKey);
  
    this.setState(prevState => {
      const resumeSection = [...prevState[targetSection]];
      const resumeNestedSection = [...resumeSection[targetIndex][targetKey]].concat(obj);
      resumeSection[targetIndex] = { ...resumeSection[targetIndex], [targetKey]: resumeNestedSection };

      return ({ [targetSection]: resumeSection })
    })
  }

  removeNestedResumeElement(e) {
    const targetSection = e.target.closest('[data-section]').dataset.section;
    const targetIndex  = e.target.closest('[data-section-index]').dataset.sectionIndex;
    const targetKey = e.target.dataset.objectKey;
    const targetNestedIndex = e.target.closest('[data-nested-index]').dataset.nestedIndex;

    console.log(targetIndex, targetKey);
  
    this.setState(prevState => {
      const resumeSection = [...prevState[targetSection]];
      const resumeNestedSection = [...resumeSection[targetIndex][targetKey]];
      resumeNestedSection.splice(targetNestedIndex, 1);
      resumeSection[targetIndex] = { ...resumeSection[targetIndex], [targetKey]: resumeNestedSection };

      return ({ [targetSection]: resumeSection })
    })
  }

  cancelEdit(e) {
    e.preventDefault();
    this.props.cancelEdit();
  }

  returnButtons() {
    if (this.props.edit) {
      return(
          <div className="control grouped-buttons">
            <button type="submit" className="button">Save Changes</button>
            <button className="button light" onClick={ this.cancelEdit }>Cancel</button>
          </div>
      );
    } else {
      return(
        <div className="control">
          <button type="submit" className="button">Create Resume</button>
        </div>
      );
    }
  }

  render() {
    const { header, skills, educationHistory, workExperience, projects } = this.state;
    const buttons = this.returnButtons();

    return (
      <form onSubmit={ this.handleFormSubmit } className="Form">
        <HeaderForm header={ header } handleChange={ this.handleHeaderChange } />
        <SkillsForm skills={ skills } addSkill={ this.addResumeSectionElement } removeSkill={ this.removeResumeSectionElement } />
        <EducationForm educationHistory={ educationHistory } handleChange={ this.handleResumeSectionChange } addEducation={ this.addResumeSectionElement } removeEducation={ this.removeResumeSectionElement } />
        <WorkForm workExperience={ workExperience } handleChange={ this.handleResumeSectionChange } handleWorkDetailChange={ this.handledNestedResumeChange } addWorkExperience={ this.addResumeSectionElement } removeWorkExperience={ this.removeResumeSectionElement } addWorkDetail={ this.addNestedResumeElement } removeWorkDetail={ this.removeNestedResumeElement }/>
        <ProjectForm projects={ projects } handleChange={ this.handleResumeSectionChange } addProject={ this.addResumeSectionElement } removeProject={ this.removeResumeSectionElement } handleProjectDetailChange={ this.handledNestedResumeChange } addProjectDetail={ this.addNestedResumeElement } removeProjectDetail={ this.removeNestedResumeElement } />
        { buttons }
      </form>
    );
  }
}

export default Form;
