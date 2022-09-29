import '../styles/ResumeSection.css';
import '../styles/Skills.css';

function Skills(props) {
  return (
    <div className="Resume-Section">
      <h2 className="Resume-Section-title">Skills</h2>
      <div className="Skills-container">
        { props.skills.map((skill) => (<div key={ skill.id } className="Skills-bubble">{ skill.text }</div>)) }
      </div>
    </div>
  );
}

export default Skills;
