import React, { useState } from "react";
import HeaderForm from "./HeaderForm";
import SkillsForm from "./SkillsForm";
import EducationForm from "./EducationForm";
import WorkForm from "./WorkForm";
import ProjectForm from "./ProjectForm";
import '../styles/Form.css';

function Form(props) {
  const [resumeContent, setResumeContent] = useState(props.resumeContent);

  const handleHeaderChange = (e) => {
    setResumeContent(prevResume => (
      {
        ...prevResume,
        header: {
          ...prevResume.header,
          [e.target.id]: e.target.value,
        }
      }
    ));
  };

  const handleResumeContentChange = (e) => {
    const targetSection = e.target.closest('[data-section]').dataset.section;
    const targetIndex  = parseInt(e.target.closest('[data-section-index]').dataset.sectionIndex);
    const targetKey = e.target.dataset.objectKey;

    setResumeContent(prevResume => (
      {
        ...prevResume,
        [targetSection]: prevResume[targetSection].map((sectionContent, index) => {
          if (index !== targetIndex) { return sectionContent }

          return ({
            ...sectionContent,
            [targetKey]: e.target.value,
          });
        })
      }
    ));
  }

  const addResumeContent = (e, obj) => {
    const targetSection = e.target.closest('[data-section]').dataset.section;

    setResumeContent(prevResume => (
      {
        ...prevResume,
        [targetSection]: prevResume[targetSection].concat(obj),
      }
    ));
  }

  const removeResumeContent = (e) => {
    const targetSection = e.target.closest('[data-section]').dataset.section;
    const targetIndex  = parseInt(e.target.closest('[data-section-index]').dataset.sectionIndex);

    setResumeContent(prevResume => (
      {
        ...prevResume,
        [targetSection]: prevResume[targetSection].filter((_, index) => index !== targetIndex),
      }
    ));
  }

  const handleNestedResumeChange = (e) => {
    const targetSection = e.target.closest('[data-section]').dataset.section;
    const targetIndex  = parseInt(e.target.closest('[data-section-index]').dataset.sectionIndex);
    const targetKey = e.target.dataset.objectKey;
    const targetNestedIndex = parseInt(e.target.closest('[data-nested-index]').dataset.nestedIndex);
    const targetNestedKey = e.target.dataset.nestedObjectKey;

    setResumeContent(prevResume => (
      {
        ...prevResume,
        [targetSection]: prevResume[targetSection].map((sectionContent, index) => {
          if (index !== targetIndex) { return sectionContent; }

          return ({
            ...sectionContent,
            [targetKey]: prevResume[targetSection][targetIndex][targetKey].map((nestedContent, nestedIndex) => {
              if (nestedIndex !== targetNestedIndex) { return nestedContent; }

              return ({
                ...nestedContent,
                [targetNestedKey]: e.target.value,
              });
            })
          });
        })
      }
    ));
  };

  const addNestedResumeContent = (e, obj) => {
    const targetSection = e.target.closest('[data-section]').dataset.section;
    const targetIndex  = parseInt(e.target.closest('[data-section-index]').dataset.sectionIndex);
    const targetKey = e.target.dataset.objectKey;

    setResumeContent(prevResume => (
      {
        ...prevResume,
        [targetSection]: prevResume[targetSection].map((sectionContent, index) => {
          if (index !== targetIndex) { return sectionContent; }

          return ({
            ...sectionContent,
          [targetKey]: prevResume[targetSection][targetIndex][targetKey].concat(obj),
          });
        })
      }
    ));
  };

  const removeNestedResumeContent = (e) => {
    const targetSection = e.target.closest('[data-section]').dataset.section;
    const targetIndex  = parseInt(e.target.closest('[data-section-index]').dataset.sectionIndex);
    const targetKey = e.target.dataset.objectKey;
    const targetNestedIndex = parseInt(e.target.closest('[data-nested-index]').dataset.nestedIndex);

    setResumeContent(prevResume => (
      {
        ...prevResume,
        [targetSection]: prevResume[targetSection].map((sectionContent, index) => {
          if (index !== targetIndex) { return sectionContent; }

          return ({
            ...sectionContent,
            [targetKey]: prevResume[targetSection][targetIndex][targetKey]
              .filter((_, nestedIndex) => nestedIndex !== targetNestedIndex)
          });
        })
      }
    ));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.handleFormSubmit(resumeContent);
  };

  const cancelEdit = (e) => {
    e.preventDefault();
    props.cancelEdit();
  };

  return (
    <form onSubmit={ handleFormSubmit } className="Form">
      <HeaderForm header={ resumeContent.header } handleChange={ handleHeaderChange } />
      <SkillsForm
        skills={ resumeContent.skills }
        addSkill={ addResumeContent }
        removeSkill={ removeResumeContent }
      />
      <EducationForm
        educationHistory={ resumeContent.educationHistory }
        handleChange={ handleResumeContentChange }
        addEducation={ addResumeContent }
        removeEducation={ removeResumeContent }
      />
      <WorkForm
        workExperience={ resumeContent.workExperience }
        handleChange={ handleResumeContentChange }
        addWorkExperience={ addResumeContent }
        removeWorkExperience={ removeResumeContent }
        handleWorkDetailChange={ handleNestedResumeChange }
        addWorkDetail={ addNestedResumeContent }
        removeWorkDetail={ removeNestedResumeContent }
      />
      <ProjectForm
        projects={ resumeContent.projects }
        handleChange={ handleResumeContentChange }
        addProject={ addResumeContent }
        removeProject={ removeResumeContent }
        handleProjectDetailChange={ handleNestedResumeChange }
        addProjectDetail={ addNestedResumeContent }
        removeProjectDetail={ removeNestedResumeContent }
      />
      {props.edit
        ? <div className="control grouped-buttons">
            <button type="submit" className="button">Save Changes</button>
            <button className="button light" onClick={ cancelEdit }>Cancel</button>
          </div>
        : <div className="control">
            <button type="submit" className="button">Create Resume</button>
          </div>
      }
    </form>
  );
}

export default Form;
