import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';

const GenSettings = props => {
  return (
    <form className="gen-settings">
      <TextField 
        id="primary-color"
        className=""
        label="Primary Color"
      />
      <TextField
        id="secondary-color"
        label="Secondary Color"
      />
      {/* <TextField
        id="grad-angle"
        label="Angle" 
        type="number"
      /> */}
      <Slider
        id="grad-angle"
        defaultValue={90}
        aria-labelledby="gradient-angle"
        step={15}
        min={0}
        max={345}
        valueLabelDisplay="auto"
      />
      <TextField
        id="img-height"
        label="Image Height"
      />
      <TextField
        id="img-width"
        label="Image Width"
      />
    </form>
  )
}

GenSettings.propTypes = {

}

export default GenSettings
