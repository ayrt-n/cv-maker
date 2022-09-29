import ResumeHeader from "./ResumeHeader";
import Skills from "./Skills";
import Education from "./Education";
import Work from "./Work";
import Projects from './Projects';

import '../styles/Resume.css';
import '../styles/Form.css';

function Resume(props) {
  const { header, skills, educationHistory, workExperience, projects } = props.resumeContent;

  return (
    <div className="Resume-container">
      <button onClick={ props.editResume } className="Resume-edit button">Edit Resume</button>
      <div className='Resume'>
        <ResumeHeader headerContent={ header } />
        <Skills skills={ skills } />
        <Education educationHistory={ educationHistory } />
        <Work workExperience={ workExperience } />
        <Projects projects={ projects } />
      </div>
    </div>
  );
}

export default Resume;
