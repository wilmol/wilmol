import React from 'react';
import linkedinLogo from './linkedin.png';
import githubLogo from './github.png';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="Socials">
        <a href="https://github.com/wilmol" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} className="Social-logo" alt="github logo and link" />
        </a>
        <a href="https://www.linkedin.com/in/molloywill/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} className="Social-logo" alt="linkedin logo and link" />
        </a>
      </div>
    </div>
  );
};

export default App;
