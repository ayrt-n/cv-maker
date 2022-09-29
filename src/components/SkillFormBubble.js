import '../styles/Form.css'
import '../styles/Skills.css'
import trashIcon from '../images/trash.svg';

function SkillFormBubble(props) {
  return (
    <div className="Skill-Form-bubble-container">
      <div className="Skill-Form-bubble">{ props.skill }</div>
      <img src={ trashIcon } alt="" className="Skill-Form-icon" onClick={ props.handleClick } />
    </div>
  );
}

export default SkillFormBubble;
