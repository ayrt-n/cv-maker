import React, { Component } from "react";
import '../styles/ResumeHeader.css';

class ResumeHeader extends Component {
  render() {
    return (
      <div className="Resume-Header">
        <h1 className="Resume-Header-title">{this.props.name}</h1>
        <div className="Resume-Header-subtitle-container">
          <h2 className="Resume-Header-subtitle">{this.props.location}</h2>
          <h2 className="Resume-Header-subtitle">{this.props.phone}</h2>
          <h2 className="Resume-Header-subtitle">{this.props.email}</h2>
        </div>
      </div>
    )
  }
}

export default ResumeHeader;
