import '../styles/ResumeSection.css';
import '../styles/Education.css';

function Education(props) {
  return(
    <div className="Resume-Section">
      <h2 className="Resume-Section-title">Education</h2>
      <div className="Education-container">
        {props.educationHistory.map((educationItem) => {
            return (
              <div className="Education-item" key={ educationItem.id }>
                <div className="Education-item-header">
                  <div className="Education-item-details">{ educationItem.program } | { educationItem.school }</div>
                  <div className="Education-item-date">{ educationItem.startDate } - { educationItem.endDate }</div>
                </div>
                <div className="Education-item-location">{ educationItem.location }</div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Education;
