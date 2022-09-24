import React, { Component } from "react";
import InputFormFieldAddOn from "./InputFormFieldAddOn";
import SkillFormBubble from "./SkillFormBubble";
import uniqid from 'uniqid';
import '../styles/Form.css';

class SkillsForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      skill: {
        text: '',
        id: uniqid()
       }
      }

    this.handleChange = this.handleChange.bind(this);
    this.addSkill = this.addSkill.bind(this);
    this.removeSkill = this.removeSkill.bind(this);
  }

  handleChange(e) {
    const { skill } = this.state;
    skill.text = e.target.value;

    this.setState({
      skill: skill
    });
  }

  addSkill(e) {
    e.preventDefault();
    this.props.addSkill(e, this.state.skill);
    this.setState({
      skill: {
        text: '',
        id: uniqid(),
      }
    });
  }

  removeSkill(e) {
    this.props.removeSkill(e);
  }

  render() {
    return (
      <div className="Form-section" data-section="skills">
        <h1 className="Form-section-header">Skills</h1>
        <InputFormFieldAddOn value={ this.state.skill.text } label="Skills"  id="skills" objectKey="skills" handleInputChange={ this.handleChange } buttonText="Add Skill" handleClick={ this.addSkill } />
        <div className="Skills-Form-preview">
          { this.props.skills.map((skill, index) => {
              return (
                <div key={ skill.id } data-section-index={ index }>
                  <SkillFormBubble skill={ skill.text } handleClick={ this.removeSkill } />
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default SkillsForm;
