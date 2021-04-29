import { createColor } from 'material-ui-color';
import { randomHexValue, createCSSGradient } from './utilities';

// Initialization defaults
export const initialColors = [randomHexValue(), randomHexValue()];
export const initialSettings = {
  primaryColor: createColor(initialColors[0]),
  secondaryColor: createColor(initialColors[1]),
  gradAngle: 90,
  imageWidth: 800,
  imageHeight: 600,
};

export const initialGradBg = createCSSGradient(initialColors[0], initialColors[1], initialSettings.gradAngle);
