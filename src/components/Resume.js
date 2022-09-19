import React, { Component } from "react";
import ResumeHeader from "./ResumeHeader";
import '../styles/Resume.css';

class Resume extends Component {
  render() {
    return (
      <div className="Resume">
        <ResumeHeader
          name="Ayrton Parkinson"
          location="Ottawa, ON, Canada"
          phone="(613) 252-6800"
          email="Ayrton.Parkinson1@gmail.com"
        />
      </div>
    );
  }
}

export default Resume;
