import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import lama_logo from './images/lama_logo.png';
import main_image from './images/main_image.png';
import Projects from './components/Projects.js';
import UploadPage from './components/UploadPage.js';

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [projects, setProjects] = useState([]);

  const handleCreateButtonClick = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
    setProjectName('');
    setErrorMessage('');
  };

  const handleCreateProject = () => {
    if (!projectName.trim()) {
      setErrorMessage("Project Name can't be empty");
    } else {
      const newProject = {
        name: projectName,
        episodes: 4,
        lastEdited: 'a week ago'
      };
      setProjects([...projects, newProject]);
      setIsPopupOpen(false);
      setProjectName('');
      setErrorMessage('');
    }
  };

  return (
    <Router>
      <div className="container">
        <header className="header">
          <img src={lama_logo} alt="LAMA Logo" className="logo" />
          <button className="back-button">Back to Home</button>
          <div className="header-icons">
            <i className="icon-settings"></i>
            <i className="icon-bell"></i>
          </div>
        </header>

        <Switch>
          <Route exact path="/">
            <main className="main-content">
              <h1>Create a New Project</h1>
              <img src={main_image} alt="Create Project" className="main-image" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.
              </p>
              <button className="create-button" onClick={handleCreateButtonClick}>+ Create New Project</button>
            </main>

            {isPopupOpen && (
              <div className="popup-overlay">
                <div className="popup">
                  <h2>Create Project</h2>
                  <label>
                    Enter Project Name:
                    <input
                      type="text"
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}
                      placeholder="Type here"
                    />
                  </label>
                  {errorMessage && <p className="error">{errorMessage}</p>}
                  <div className="popup-buttons">
                    <button className="cancel-button" onClick={handlePopupClose}>Cancel</button>
                    <button className="create-project-button" onClick={handleCreateProject}>Create</button>
                  </div>
                </div>
              </div>
            )}
            
            <Projects projects={projects} />
          </Route>

          <Route path="/upload/:projectName" component={UploadPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;