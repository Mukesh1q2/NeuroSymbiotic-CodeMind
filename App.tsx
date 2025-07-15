
import React, { useState, useCallback } from 'react';
import { NeuroSymbioticCodeMind } from './components/NeuroSymbioticCodeMind';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = useCallback(() => {
    setDarkMode(prev => !prev);
  }, []);

  return (
    <div className={`${darkMode ? 'dark' : ''} w-full h-full`}>
      <div className="bg-gray-100 dark:bg-gradient-to-br dark:from-[#0a192f] dark:to-[#000000] text-gray-800 dark:text-gray-200 min-h-screen font-sans">
        <NeuroSymbioticCodeMind darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </div>
  );
}

export default App;