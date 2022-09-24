import React, { Component } from "react";
import '../styles/Form.css'
import '../styles/Skills.css'
import trashIcon from '../images/trash.svg';

class SkillFormBubble extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.handleClick(e);
  }

  render() {
    return (
      <div className="Skill-Form-bubble-container">
        <div className="Skill-Form-bubble">{ this.props.skill }</div>
        <img src={ trashIcon } alt="" className="Skill-Form-icon" onClick={ this.handleClick } />
      </div>
    );
  }
}

export default SkillFormBubble;
