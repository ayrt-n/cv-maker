import InputFormField from './InputFormField';
import NestedInputFormField from './NestedInputFormField';
import FormSectionSubHeader from './FormSectionSubHeader';
import LineButton from './LineButton';
import '../styles/Form.css';
import uniqid from 'uniqid';

function WorkForm (props) {
  const createJobDescriptionObj = () => {
    return ({
      text: '',
      id: uniqid(),
    });
  };

  const createWorkExperienceObj = () => {
    return ({
      employerName: '',
      location: '',
      startDate: '',
      endDate: '',
      jobTitle: '',
      details: [
        {
          text: '',
          id: uniqid(),
        }
      ],
      id: uniqid(),
    });
  }

  const addWorkExperience = (e) => {
    e.preventDefault();
    props.addWorkExperience(e, createWorkExperienceObj());
  };

  const removeWorkExperience = (e) => {
    e.preventDefault();
    props.removeWorkExperience(e);
  };

  const addWorkDetail = (e) => {
    e.preventDefault();
    props.addWorkDetail(e, createJobDescriptionObj());
  };

  const removeWorkDetail = (e) => {
    e.preventDefault();
    props.removeWorkDetail(e);
  };

  return (
    <div className='Form-section' data-section='workExperience'>
      <h1 className='Form-section-header'>Work Experience</h1>
      { props.workExperience.map((workItem, index) => {
          return(
            <div key={ workItem.id } data-section-index={ index } className='Form-sub-section'>
              <FormSectionSubHeader
                section='Work Experience'
                index={ index }
                handleClick={ removeWorkExperience }
              />

              <InputFormField
                value={workItem.employerName}
                label='Employer Name'
                id={`employer-${workItem.id}`}
                objectKey='employerName'
                handleInputChange={props.handleChange }
              />
              <InputFormField
                value={workItem.location}
                label='Location'
                id={`location-${workItem.id}`}
                objectKey='location'
                handleInputChange={props.handleChange}
              />
              <InputFormField
                value={workItem.jobTitle}
                label='Job Title'
                id={`title-${workItem.id}`}
                objectKey='jobTitle'
                handleInputChange={props.handleChange}
              />
              <InputFormField
                value={workItem.startDate}
                label='Start Date'
                id={`start-${workItem.id}`}
                objectKey='startDate'
                handleInputChange={props.handleChange}
              />
              <InputFormField
                value={workItem.endDate}
                label='End Date'
                id={`end-${workItem.id}`}
                objectKey='endDate'
                handleInputChange={props.handleChange}
              />

              <label htmlFor={`details-${workItem.id}`} className='label'>Job Description</label>
              { workItem.details.map((detail, detail_index) => {
                    return (
                      <div key={ detail.id } data-nested-index={ detail_index }>
                        <NestedInputFormField
                          value={ detail.text }
                          id={`details-${workItem.id}`}
                          objectKey='details'
                          nestedObjectKey='text'
                          handleInputChange={props.handleWorkDetailChange}
                          handleClick={removeWorkDetail}
                        />
                      </div>
                    );
                  }
                )
              }
              <LineButton
                handleClick={ addWorkDetail }
                objectKey='details'
                text='Add Job Description'
              />
            </div>
          );
        })
      }
      <LineButton handleClick={ addWorkExperience } text='Add Work Experience' />
    </div>
  );
}

export default WorkForm;
