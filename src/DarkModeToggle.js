import React, { useState } from 'react';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    // You can implement theme change logic here
  };

  return (
    <div className="DarkModeToggle">
      <button onClick={toggleMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
    </div>
  );
}

export default DarkModeToggle;
