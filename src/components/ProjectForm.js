import React, { Component } from "react";
import InputFormField from "./InputFormField";
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
      text: 'Project details (e.g., summary, achievements, lessons learned)',
      id: uniqid(),
    }
  }

  createProjectObj() {
    return {
      name: "Project Name",
      startDate: "Start Date",
      endDate: "End Date",
      details: [
        {
          text: "Project details (e.g., summary, achievements, lessons learned)",
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
      <div data-section="projects">
        { this.props.projects.map((project, index) => {
            return(
              <div key={ project.id } data-section-index={ index }>
                <InputFormField value={project.name} label="Project Name" id={`name-${project.id}`} objectKey="name" handleInputChange={this.handleChange} />
                <InputFormField value={project.startDate} label="Start Date" id={`start-${project.id}`} objectKey="startDate" handleInputChange={this.handleChange} />
                <InputFormField value={project.endDate} label="End Date" id={`end-${project.id}`} objectKey="endDate" handleInputChange={this.handleChange} />

                <label htmlFor={`details-${project.id}`}>Project Description</label>
                { project.details.map((detail, detail_index) => {
                      return (
                        <div key={ detail.id } data-nested-index={ detail_index }>
                          <input type="text" value={ detail.text } id={`details-${project.id}`} data-object-key="details" data-nested-object-key="text" onChange={ this.handleProjectDetailChange }></input>
                          <button onClick={ this.removeProjectDetail } data-object-key="details">Remove Project Detail</button>
                        </div>
                      );
                    }
                  )
                }
                <button onClick={ this.addProjectDetail } data-object-key="details">Add Project Detail</button>
                <button onClick={ this.removeProject }>Remove Project</button>
              </div>
            );
          })
        }
        <button onClick={ this.addProject }>Add Project</button>
      </div>
    );
  }
}

export default ProjectForm;
