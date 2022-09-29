import React, { useState } from "react";
import Resume from "./components/Resume";
import Form from "./components/Form";
import './App.css';

function App(props) {
  const [resumeContent, setResumeContent] = useState({
    header: { name: '', location: '', phone: '', email: '' },
    skills: [],
    educationHistory: [],
    workExperience: [],
    projects: [],
  });

  const [formActive, setFormActive] = useState(true);
  const [edit, setEdit] = useState(false);

  const handleFormSubmit = (newResumeContent) => {
    setResumeContent(newResumeContent);
    setFormActive(false);
  };

  const editResume = () => {
    setFormActive(true);
    setEdit(true);
  };

  const cancelEdit = () => {
    setFormActive(false);
  };

  return (
    <div className="App">
      <h1 className="App-header">CV Maker</h1>
      {formActive
        ? <Form
            resumeContent={ resumeContent }
            handleFormSubmit={ handleFormSubmit }
            formActive={ formActive }
            edit={ edit }
            cancelEdit={ cancelEdit }
          />
        : <Resume
            resumeContent={ resumeContent }
            resumeHidden={ formActive }
            editResume={ editResume }
          />
      }
    </div>
  );
}

export default App;
