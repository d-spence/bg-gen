import React, { useState } from 'react';
import { createColor } from 'material-ui-color';

// Import components
import SideBar from './components/SideBar';
import GenDisplayArea from './components/GenDisplayArea';

// Import utilities
import { randomHexValue, createCSSGradient } from './utilities';

const initialColors = [randomHexValue(), randomHexValue()];
const initialSettings = {
  primaryColor: createColor(initialColors[0]),
  secondaryColor: createColor(initialColors[1]),
  gradAngle: 90,
  imageWidth: 800,
  imageHeight: 600,
};
const initialGradBg = createCSSGradient(initialColors[0], initialColors[1], initialSettings.gradAngle);

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
