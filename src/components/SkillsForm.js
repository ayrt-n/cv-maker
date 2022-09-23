import React, { Component } from "react";
import InputFormField from "./InputFormField";
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
    this.props.addSkill(this.state.skill);
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
      <div>
        <InputFormField value={ this.state.skill.text } label="Skills"  id="skills" objectKey="skills" handleInputChange={ this.handleChange } />
        <button onClick={ this.addSkill } value={ this.state.skill.text }>Add Skill</button>
        <div className="Skills-container">
          { this.props.skills.map((skill, index) => {
              return (
                <div key={ skill.id } data-skill-index={ index }>
                  <div className="Skills-bubble">
                    { skill.text }
                  </div>
                  <button onClick={ this.removeSkill }>-</button>
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
