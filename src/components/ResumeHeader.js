import React, { Component } from "react";
import '../styles/ResumeHeader.css';

class ResumeHeader extends Component {
  render() {
    const { name, location, phone, email } = this.props.headerContent;

    return (
      <div className="Resume-Header">
        <h1 className="Resume-Header-title">{name}</h1>
        <div className="Resume-Header-subtitle-container">
          <h2 className="Resume-Header-subtitle">{location}</h2>
          <h2 className="Resume-Header-subtitle">{phone}</h2>
          <h2 className="Resume-Header-subtitle">{email}</h2>
        </div>
      </div>
    )
  }
}

export default ResumeHeader;
