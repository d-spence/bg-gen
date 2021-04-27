
export const randomHexValue = () => {
  // Return a random hex color value
  return "#000000".replace(/0/g, function() {
      return (~~(Math.random()*16)).toString(16);
  });
}

export const createCSSGradient = (color1, color2, angle) => {
  // Takes 3 parameters: 2 color values (hex) and angle (int)
  // Returns a CSS linear-gradient rule as a string
  return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
}
