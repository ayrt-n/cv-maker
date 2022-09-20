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


    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  onSubmitHandler(e) {
    e.preventDefault();
    this.props.onSubmitHandler(this.state);
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
      <form className="Form" onSubmit={this.onSubmitHandler}>
        <label htmlFor="name">Full name</label>
        <input type="text" value={ this.state.name } id="name" onChange={ this.onChangeHandler }></input>

        <label htmlFor="location">Location</label>
        <input type="text" value={ this.state.location } id="location" onChange={ this.onChangeHandler }></input>

        <label htmlFor="phone">Phone Number</label>
        <input type="text" value={ this.state.phone } id="phone" onChange={ this.onChangeHandler }></input>

        <label htmlFor="email">Email</label>
        <input type="text" value={ this.state.email } id="email" onChange={ this.onChangeHandler }></input>

        <button type="submit">Save</button>
        <button onClick={ this.cancelEdit }>Cancel</button>
      </form>
    );
  }
}

export default HeaderForm;
