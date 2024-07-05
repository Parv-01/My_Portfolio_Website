import React, { useState } from 'react';
import Project3DView from './Project3DView';
import CommandLine from './CommandLine';

const App: React.FC = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.getElementById('theme-style')!.setAttribute('href', `styles/${newTheme}-theme.css`);
  };

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1>3D Project Showcase</h1>
      <Project3DView />
      <CommandLine />
    </div>
  );
};

export default App;
