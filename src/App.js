import React, { useState } from 'react';

// Import components
import SideBar from './components/SideBar';
import GenDisplayArea from './components/GenDisplayArea';

// Import config vars
import { initialSettings, initialGradBg } from './config';

const App = () => {
  const [settings, setSettings] = useState(initialSettings);
  const [gradBg, setGradBg] = useState(initialGradBg);

  return (
    <div className="App">
      <SideBar
        settings={settings}
        setSettings={setSettings}
        gradBg={gradBg}
        setGradBg={setGradBg}
      />
      <GenDisplayArea
        settings={settings}
        gradBg={gradBg}
      />
    </div>
  );
}

export default App;
