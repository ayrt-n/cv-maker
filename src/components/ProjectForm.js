import InputFormField from './InputFormField';
import NestedInputFormField from './NestedInputFormField';
import FormSectionSubHeader from './FormSectionSubHeader';
import LineButton from './LineButton';
import '../styles/Form.css';
import uniqid from 'uniqid';

function ProjectForm(props) {
  const createProjectDescriptionObj = () => {
    return ({
      text: '',
      id: uniqid(),
    });
  };

  const createProjectObj = () => {
    return ({
      name: '',
      startDate: '',
      endDate: '',
      details: [
        {
          text: '',
          id: uniqid(),
        }
      ],
      id: uniqid(),
    });
  };

  const addProject = (e) => {
    e.preventDefault();
    props.addProject(e, createProjectObj());
  };

  const removeProject = (e) => {
    e.preventDefault();
    props.removeProject(e);
  };

  const addProjectDetail = (e) => {
    e.preventDefault();
    props.addProjectDetail(e, createProjectDescriptionObj());
  };

  const removeProjectDetail = (e) => {
    e.preventDefault();
    props.removeProjectDetail(e);
  };

  return (
    <div className='Form-section' data-section='projects'>
      <h1 className='Form-section-header'>Projects</h1>
      { props.projects.map((project, index) => {
          return(
            <div key={ project.id } data-section-index={ index } className='Form-sub-section'>
              <FormSectionSubHeader section='Project' index={ index } handleClick={ removeProject } />

              <InputFormField
                value={project.name}
                label='Project Name'
                id={`name-${project.id}`}
                objectKey='name'
                handleInputChange={props.handleChange}
              />
              <InputFormField
                value={project.startDate}
                label='Start Date'
                id={`start-${project.id}`}
                objectKey='startDate'
                handleInputChange={props.handleChange}
              />
              <InputFormField
                value={project.endDate}
                label='End Date'
                id={`end-${project.id}`}
                objectKey='endDate'
                handleInputChange={props.handleChange}
              />

              <label htmlFor={`details-${project.id}`} className='label'>Project Description</label>
              { project.details.map((detail, detail_index) => {
                    return (
                      <div key={ detail.id } data-nested-index={ detail_index }>
                        <NestedInputFormField
                          value={ detail.text }
                          id={`details-${project.id}`}
                          objectKey='details'
                          nestedObjectKey='text'
                          handleInputChange={ props.handleProjectDetailChange }
                          handleClick={ removeProjectDetail } />
                      </div>
                    );
                  }
                )
              }
              <LineButton
                handleClick={ addProjectDetail }
                objectKey='details'
                text='Add Project Description'
              />
            </div>
          );
        })
      }
      <LineButton handleClick={ addProject } text='Add Project' />
    </div>
  );
}

export default ProjectForm;
