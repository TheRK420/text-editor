import React from 'react';

function TextPreview({ text }) {
  return (
    <div className="TextPreview">
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
  );
}

export default TextPreview;

