import React, { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';
import TextInput from './TextInput';
import TextPreview from './TextPreview';
import TextTransformations from './TextTransformations';
import TextActions from './TextActions';
import './App.css';

function App() {
  const [text, setText] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Text Editor</h1>
        <DarkModeToggle />
        <TextInput setText={setText} />
        <div className="Statistics">
          <h2>Statistics</h2>
          <p>Word Count: {text.trim().split(/\s+/).filter(Boolean).length}</p>
          <p>Character Count: {text.length}</p>
          <p>Reading Time: {Math.ceil(text.trim().split(/\s+/).filter(Boolean).length / 200)} minute(s)</p>
        </div>
        <TextPreview text={text} />
        <TextTransformations text={text} setText={setText} />
        <TextActions text={text} setText={setText} />
      </header>
    </div>
  );
}

export default App;
