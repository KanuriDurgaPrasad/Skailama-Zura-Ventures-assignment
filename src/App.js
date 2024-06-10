import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <img src="path_to_logo" alt="LAMA Logo" className="logo" />
        <button className="back-button">Back to Home</button>
        <div className="header-icons">
          <i className="icon-settings"></i>
          <i className="icon-bell"></i>
        </div>
      </header>

      <main className="main-content">
        <h1>Create a New Project</h1>
        <img src="path_to_image" alt="Create Project" className="main-image" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.
        </p>
        <button className="create-button">+ Create New Project</button>
      </main>
    </div>
  );
};

export default App;
