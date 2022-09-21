import React, { Component } from "react";
import InputFormField from "./InputFormField";
import '../styles/Form.css';

class HeaderForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.resumeContent.header.name,
      location: this.props.resumeContent.header.location,
      phone: this.props.resumeContent.header.phone,
      email: this.props.resumeContent.header.email,
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
  }

  handleInputChange(e) {
    console.log(e.target.id);
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  }

  cancelEdit(e) {
    e.preventDefault();
    this.setState({
      name: this.props.resumeContent.header.name,
      location: this.props.resumeContent.header.location,
      phone: this.props.resumeContent.header.phone,
      email: this.props.resumeContent.header.email,
    })
  }

  render() {
    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        <InputFormField value={ this.state.name } label="Full Name" id="name" handleInputChange={ this.handleInputChange } />
        <InputFormField value={ this.state.location } label="Location" id="location" handleInputChange={ this.handleInputChange } />
        <InputFormField value={ this.state.phone } label="Phone Number" id="phone" handleInputChange={ this.handleInputChange } />
        <InputFormField value={ this.state.email } label="E-mail" id="email" handleInputChange={ this.handleInputChange } />

        <button type="submit">Save</button>
        <button onClick={ this.cancelEdit }>Cancel</button>
      </form>
    );
  }
}

export default HeaderForm;
