import React, { useState } from 'react';
import { createColor } from 'material-ui-color';

// Import components
import SideBar from './components/SideBar';
import GenDisplayArea from './components/GenDisplayArea';

const initialSettings = {
  primaryColor: createColor('#000000'),
  secondaryColor: createColor('#ffffff'),
  gradAngle: 90,
  imageWidth: 800,
  imageHeight: 600,
};

const App = () => {
  const [settings, setSettings] = useState(initialSettings);

  return (
    <div className="App">
      <SideBar
        settings={settings}
        setSettings={setSettings}
      />
      <GenDisplayArea />
    </div>
  );
}

export default App;
