import { createColor } from 'material-ui-color';
import { randomHexValue, createCSSGradient } from './utilities';

// Initialization defaults
export const initialColors = [randomHexValue(), randomHexValue()];
export const initialSettings = {
  primaryColor: createColor(initialColors[0]),
  secondaryColor: createColor(initialColors[1]),
  gradAngle: 120,
  imageWidth: 600,
  imageHeight: 600,
};

export const initialGradBg = createCSSGradient(initialColors[0], initialColors[1], initialSettings.gradAngle);
