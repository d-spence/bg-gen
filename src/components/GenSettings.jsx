import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import { ColorPicker, createColor } from 'material-ui-color';

const GenSettings = ({ settings, setSettings }) => {
  const handleChange = (value) => {
    const newSettings = {...settings, ...value};
    console.log({newSettings})
    setSettings(newSettings);
  }

  return (
    <form className="gen-settings">
      <ColorPicker 
        id="primary-color"
        value={settings.primaryColor}
        onChange={e => {
          handleChange({primaryColor: createColor(e.css.backgroundColor)})
        }}
      />
      <ColorPicker
        id="secondary-color"
        value={settings.secondaryColor}
        onChange={e => {
          handleChange({secondaryColor: createColor(e.css.backgroundColor)})
        }}
      />
      <Slider
        id="grad-angle"
        defaultValue={settings.gradAngle}
        aria-labelledby="gradient-angle"
        step={15}
        min={0}
        max={345}
        valueLabelDisplay="auto"
        valueLabelFormat={val => val + '°'}
      />
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
    </form>
  )
}

GenSettings.propTypes = {
  settings: PropTypes.object,
  setSettings: PropTypes.func,
}

export default GenSettings
