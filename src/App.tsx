import React from 'react';
import './App.scss';
import github from './assets/images/github.svg';
import linkedin from './assets/images/linkedin.svg';
import leetcode from './assets/images/leetcode.svg';

const App: React.FC = () => {
  return (
    <div className="main">
      <div>
        <h1>Will Molloy</h1>
        <p>Software Engineer</p>
      </div>
      <div className="links">
        <a href="https://github.com/wilmol" target="_blank" rel="noopener noreferrer">
          <img src={github} className="link-image" alt="Will's GitHub page" />
        </a>
        <a href="https://leetcode.com/wilmol/" target="_blank" rel="noopener noreferrer">
          <img src={leetcode} className="link-image" alt="Will's LeetCode page" />
        </a>
        <a href="https://www.linkedin.com/in/molloywill/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} className="link-image" alt="Will's LinkedIn page" />
        </a>
      </div>
    </div>
  );
};

export default App;
