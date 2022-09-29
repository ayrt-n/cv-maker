import React, { useState } from 'react';
import InputFormFieldAddOn from './InputFormFieldAddOn';
import SkillFormBubble from './SkillFormBubble';
import uniqid from 'uniqid';
import '../styles/Form.css';

function SkillsForm(props) {
  const [tmpSkill, setTmpSkill] = useState(
    {
      text: '',
      id: uniqid(),
    }
  );
  
  const handleChange = (e) => {
    setTmpSkill(prevTmpSkill => ({
      ...prevTmpSkill,
      text: e.target.value,
    }));
  };

  const addSkill = (e) => {
    e.preventDefault();
    props.addSkill(e, tmpSkill);
    
    setTmpSkill({
      text: '',
      id: uniqid(),
    });
  };

  return (
    <div className="Form-section" data-section="skills">
      <h1 className="Form-section-header">Skills</h1>
      <InputFormFieldAddOn
        value={ tmpSkill.text }
        label="Skills"
        id="skills"
        objectKey="skills"
        handleInputChange={ handleChange }
        buttonText="Add Skill"
        handleClick={ addSkill }
      />
      <div className="Skills-Form-preview">
        { props.skills.map((skill, index) => {
            return (
              <div key={ skill.id } data-section-index={ index }>
                <SkillFormBubble skill={ skill.text } handleClick={ props.removeSkill } />
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default SkillsForm;
