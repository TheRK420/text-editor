import React from 'react';

function TextTransformations({ text, setText }) {
  const handleUppercase = () => {
    setText(text.toUpperCase());
  };

  const handleLowercase = () => {
    setText(text.toLowerCase());
  };

  return (
    <div className="TextTransformations">
      <button onClick={handleUppercase}>Uppercase</button>
      <button onClick={handleLowercase}>Lowercase</button>
    </div>
  );
}

export default TextTransformations;

