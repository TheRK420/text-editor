import React from 'react';

function TextInput({ setText }) {
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="TextInput">
      <textarea onChange={handleChange} />
    </div>
  );
}

export default TextInput;

