import '../styles/Work.css';
import '../styles/ResumeSection.css';

function Work(props) {
  return (
    <div className="Resume-Section">
      <h2 className="Resume-Section-title">Work Experience</h2>
      <div className="Work-container">
        {props.workExperience.map((work) => {
            return (
              <div className="Work-item" key={ work.id }>
                <div className="Work-item-header">
                  <div className="Work-item-details">{ work.employerName } | { work.location }</div>
                  <div className="Work-item-date">{ work.startDate } - { work.endDate }</div>
                </div>
                <div className="Work-item-title">{ work.jobTitle }</div>
                <ul className="Work-details">
                  {work.details.map((detail) => {
                      return (
                        <li className="Work-bullet-point" key={detail.id}>{detail.text}</li>
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

export default Work;