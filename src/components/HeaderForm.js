import React, { Component } from "react";
import InputFormField from "./InputFormField";
import '../styles/Form.css';

class HeaderForm extends Component {
  constructor(props) {
    super(props);

    this.handleHeaderChange = this.handleHeaderChange.bind(this);
  }

  handleHeaderChange(e) {
    this.props.handleHeaderChange(e);
  }

  render() {
    const { name, location, phone, email } = { ...this.props.header }

    return (
      <div>
        <InputFormField value={ name } label="Full Name" id="name" handleInputChange={ this.handleHeaderChange } />
        <InputFormField value={ location } label="Location" id="location" handleInputChange={ this.handleHeaderChange } />
        <InputFormField value={ phone } label="Phone Number" id="phone" handleInputChange={ this.handleHeaderChange } />
        <InputFormField value={ email } label="E-mail" id="email" handleInputChange={ this.handleHeaderChange } />
      </div>
    );
  }
}

export default HeaderForm;
