import React, { useState } from 'react';

const CommandLine: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleCommand = (command: string) => {
    switch (command) {
      case 'mvi':
        setOutput('Navigating to secret page...');
        break;
      default:
        setOutput('Unknown command');
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
  };

  return (
    <div className="command-line">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter command"
        />
        <button type="submit">Execute</button>
      </form>
      <div className="output">{output}</div>
    </div>
  );
};

export default CommandLine;
