import React, { Component } from "react";
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
        <label htmlFor="name">Full name</label>
        <input type="text" value={ this.state.name } id="name" onChange={ this.handleInputChange }></input>

        <label htmlFor="location">Location</label>
        <input type="text" value={ this.state.location } id="location" onChange={ this.handleInputChange }></input>

        <label htmlFor="phone">Phone Number</label>
        <input type="text" value={ this.state.phone } id="phone" onChange={ this.handleInputChange }></input>

        <label htmlFor="email">Email</label>
        <input type="text" value={ this.state.email } id="email" onChange={ this.handleInputChange }></input>

        <button type="submit">Save</button>
        <button onClick={ this.cancelEdit }>Cancel</button>
      </form>
    );
  }
}

export default HeaderForm;
