import React, { useState } from 'react';

// Import components
import SideBar from './components/SideBar';
import GenDisplayArea from './components/GenDisplayArea';
import Alert from './components/Alert';

// Import config vars
import { initialSettings, initialGradBg } from './config';

const App = () => {
  const [settings, setSettings] = useState(initialSettings);
  const [gradBg, setGradBg] = useState(initialGradBg);
  const [alertMsg, setAlertMsg] = useState('testing');
  const [showAlertMsg, setShowAlertMsg] = useState(false);
  const [transition, setTransition] = useState(true);

  const handleAlertMsg = (msg) => {
    // Set new alert msg and show the alert
    setAlertMsg(msg);
    setShowAlertMsg(true);
  }

  const handleTransition = () => {
    setTransition(false);
    setTimeout(() => setTransition(true), 400);
  }

  return (
    <div className="App">
      <SideBar
        settings={settings}
        setSettings={setSettings}
        gradBg={gradBg}
        setGradBg={setGradBg}
        handleAlertMsg={handleAlertMsg}
        handleTransition={handleTransition}
      />
      <GenDisplayArea
        settings={settings}
        gradBg={gradBg}
        transition={transition}
      />
      <Alert 
        alertMsg={alertMsg}
        showAlertMsg={showAlertMsg}
        setShowAlertMsg={setShowAlertMsg}
      />
    </div>
  );
}

export default App;
