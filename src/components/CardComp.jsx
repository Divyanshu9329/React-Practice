import React, { useEffect, useState } from 'react';

const CardComp = () => {
  const [isDark, setIsDark] = useState(false);

  // Initialize from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Handle toggle
  const toggleDarkMode = () => {
    const root = window.document.documentElement;
    root.classList.toggle('dark');
    const newMode = !isDark;
    setIsDark(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`relative inline-flex h-10 w-20 items-center rounded-full transition-colors duration-300 ${
        isDark ? 'bg-black' : 'bg-gray-300'
      } shadow-inner`}
    >
      <span
        className={`absolute left-1 top-1 h-8 w-8 rounded-full bg-gray-900 transition-transform duration-300 ${
          isDark ? 'translate-x-10' : 'translate-x-0'
        } flex items-center justify-center`}
      >
        {isDark ? (
          <span className="h-3 w-3 rounded-full border-4 border-white"></span> // circle
        ) : (
          <span className="h-1 w-4 rounded bg-white"></span> // minus
        )}
      </span>
    </button>
  );
};

export default CardComp;
