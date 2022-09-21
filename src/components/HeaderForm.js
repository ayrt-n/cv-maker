import React, { Component } from "react";
import InputFormField from "./InputFormField";
import '../styles/Form.css';

class HeaderForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.handleChange(e);
  }

  render() {
    const { name, location, phone, email } = { ...this.props.header }

    return (
      <div>
        <InputFormField value={ name } label="Full Name" id="name" handleInputChange={ this.handleChange } />
        <InputFormField value={ location } label="Location" id="location" handleInputChange={ this.handleChange } />
        <InputFormField value={ phone } label="Phone Number" id="phone" handleInputChange={ this.handleChange } />
        <InputFormField value={ email } label="E-mail" id="email" handleInputChange={ this.handleChange } />
      </div>
    );
  }
}

export default HeaderForm;
