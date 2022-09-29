import '../styles/Projects.css';
import '../styles/ResumeSection.css';

function Projects(props) {
  return (
    <div className="Resume-Section">
      <h2 className="Resume-Section-title">Projects</h2>
      <div className="Projects-container">
        {props.projects.map((project) => {
            return (
              <div className="Projects-item" key={ project.id }>
                <div className="Projects-item-header">
                  <div className="Projects-item-details">{ project.name }</div>
                  <div className="Projects-item-date">{ project.startDate } - { project.endDate }</div>
                </div>
                <ul className="Projects-details">
                  { project.details.map((detail) => {
                      return (
                        <li className="Projects-bullet-point" key={ detail.id }>{ detail.text }</li>
                      )
                    })
                  }
                </ul>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Projects;
