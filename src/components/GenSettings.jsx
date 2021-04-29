import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import { ColorPicker, createColor } from 'material-ui-color';
import { createCSSGradient } from '../utilities';

const GenSettings = ({ settings, setSettings, gradBg, setGradBg }) => {
  const handleChange = (value) => {
    const newSettings = {...settings, ...value};
    // console.log(newSettings)
    const newGradientBg = createCSSGradient(
      newSettings.primaryColor.raw,
      newSettings.secondaryColor.raw,
      newSettings.gradAngle
    );

    setSettings(newSettings);
    setGradBg(newGradientBg);
  }

  return (
    <form className="gen-settings">
      <Typography className="setting-label" variant="h6">Colors</Typography>
      <ColorPicker 
        id="primary-color"
        value={settings.primaryColor}
        onChange={e => {
          // console.log(e);
          handleChange({primaryColor: createColor(`#${e.hex}`)});
        }}
      />
      <ColorPicker
        id="secondary-color"
        value={settings.secondaryColor}
        onChange={e => {
          handleChange({secondaryColor: createColor(e.css.backgroundColor)});
        }}
      />
      <Typography className="setting-label" variant="h6">Angle</Typography>
      <Slider
        id="grad-angle"
        defaultValue={settings.gradAngle}
        aria-labelledby="gradient-angle"
        step={15}
        min={0}
        max={345}
        valueLabelDisplay="auto"
        valueLabelFormat={val => val + '°'}
        onChange={(_, val) => {
          console.log(val);
          handleChange({gradAngle: val})
        }}
      />
      <Typography className="setting-label" variant="h6">Size</Typography>
      <TextField
        id="img-width"
        label="Image Width"
        defaultValue={settings.imageWidth}
      />
      <TextField
        id="img-height"
        label="Image Height"
        defaultValue={settings.imageHeight}
      />
      <Typography className="setting-label" variant="h6">CSS</Typography>
      <TextField
        disabled
        value={gradBg}
        defaultValue={gradBg}
      />
    </form>
  )
}

GenSettings.propTypes = {
  settings: PropTypes.object,
  setSettings: PropTypes.func,
}

export default GenSettings
