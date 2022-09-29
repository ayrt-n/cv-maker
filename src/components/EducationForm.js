import InputFormField from './InputFormField';
import LineButton from './LineButton';
import FormSectionSubHeader from './FormSectionSubHeader';
import '../styles/Form.css';
import uniqid from 'uniqid';

function EducationForm(props) {
  const createNewEducationObj = () => {
    return ({
      school: '',
      program: '',
      location: '',
      startDate: '',
      endDate: '',
      id: uniqid(),
    });
  };

  const addEducation = (e) => {
    e.preventDefault();
    props.addEducation(e, createNewEducationObj());
  };

  const removeEducation = (e) => {
    e.preventDefault();
    props.removeEducation(e);
  };

  return (
    <div className='Form-section' data-section='educationHistory'>
      <h1 className='Form-section-header'>Education History</h1>
      { props.educationHistory.map((educationItem, index) => {
          return (
            <div key={ educationItem.id } data-section-index={ index } className='Form-sub-section'>
              <FormSectionSubHeader section='Education' index={ index } handleClick={ removeEducation } />

              <InputFormField
                value={ educationItem.school }
                label='School Name'
                id={ `school-${educationItem.id}` }
                objectKey='school'
                handleInputChange={ props.handleChange }
              />
              <InputFormField
                value={ educationItem.program }
                label='Program' id={ `program-${educationItem.id}` }
                objectKey='program'
                handleInputChange={ props.handleChange }
              />
              <InputFormField
                value={ educationItem.startDate }
                label='Start Date'
                id={ `start-${educationItem.id}` }
                objectKey='startDate'
                handleInputChange={ props.handleChange }
              />
              <InputFormField
                value={ educationItem.endDate }
                label='End Date'
                id={ `end-${educationItem.id}` }
                objectKey='endDate'
                handleInputChange={ props.handleChange }
              />
              <InputFormField
                value={ educationItem.location }
                label='Location'
                id={ `location-${educationItem.id}` }
                objectKey='location'
                handleInputChange={ props.handleChange }
              />
            </div>
          );
        })
      }
      <LineButton handleClick={ addEducation } text='Add Education' />
    </div>
  );
}

export default EducationForm;
