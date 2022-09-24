import React, { Component } from "react";
import InputFormField from "./InputFormField";
import NestedInputFormField from "./NestedInputFormField";
import FormSectionSubHeader from "./FormSectionSubHeader";
import LineButton from "./LineButton";
import '../styles/Form.css';
import uniqid from 'uniqid';

class ProjectForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleProjectDetailChange = this.handleProjectDetailChange.bind(this);
    this.addProject = this.addProject.bind(this);
    this.removeProject = this.removeProject.bind(this);
    this.addProjectDetail = this.addProjectDetail.bind(this);
    this.removeProjectDetail = this.removeProjectDetail.bind(this);
  }

  createProjectDescriptionObj() {
    return {
      text: '',
      id: uniqid(),
    }
  }

  createProjectObj() {
    return {
      name: "",
      startDate: "",
      endDate: "",
      details: [
        {
          text: "",
          id: uniqid(),
        }
      ],
      id: uniqid(),
    }
  }

  handleChange(e) {
    this.props.handleChange(e);
  }

  handleProjectDetailChange(e) {
    this.props.handleProjectDetailChange(e);
  }

  addProject(e) {
    e.preventDefault();
    this.props.addProject(e, this.createProjectObj());
  }

  removeProject(e) {
    e.preventDefault();
    this.props.removeProject(e);
  }

  addProjectDetail(e) {
    e.preventDefault();
    this.props.addProjectDetail(e, this.createProjectDescriptionObj());
  }

  removeProjectDetail(e) {
    e.preventDefault();
    this.props.removeProjectDetail(e);
  }

  render() {
    return (
      <div className="Form-section" data-section="projects">
        <h1 className="Form-section-header">Projects</h1>
        { this.props.projects.map((project, index) => {
            return(
              <div key={ project.id } data-section-index={ index } className="Form-sub-section">
                <FormSectionSubHeader section="Project" index={ index } handleClick={ this.removeProject } />

                <InputFormField value={project.name} label="Project Name" id={`name-${project.id}`} objectKey="name" handleInputChange={this.handleChange} />
                <InputFormField value={project.startDate} label="Start Date" id={`start-${project.id}`} objectKey="startDate" handleInputChange={this.handleChange} />
                <InputFormField value={project.endDate} label="End Date" id={`end-${project.id}`} objectKey="endDate" handleInputChange={this.handleChange} />

                <label htmlFor={`details-${project.id}`} className="label">Project Description</label>
                { project.details.map((detail, detail_index) => {
                      return (
                        <div key={ detail.id } data-nested-index={ detail_index }>
                          <NestedInputFormField value={ detail.text } id={`details-${project.id}`} objectKey="details" nestedObjectKey="text" handleInputChange={ this.handleProjectDetailChange } handleClick={ this.removeProjectDetail } />
                        </div>
                      );
                    }
                  )
                }
                <LineButton handleClick={ this.addProjectDetail } objectKey="details" text="Add Project Description"/>
              </div>
            );
          })
        }
        <LineButton handleClick={ this.addProject } text="Add Project" />
      </div>
    );
  }
}

export default ProjectForm;
