import React from 'react';

function TextActions({ text, setText }) {
  const handleClear = () => {
    setText('');
  };

  const handleRemoveExtraSpaces = () => {
    setText(text.replace(/\s+/g, ' '));
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(text);
    alert('Text copied to clipboard!');
  };

  return (
    <div className="TextActions">
      <button onClick={handleClear}>Clear Text</button>
      <button onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
      <button onClick={handleCopyToClipboard}>Copy To Clipboard</button>
    </div>
  );
}

export default TextActions;
