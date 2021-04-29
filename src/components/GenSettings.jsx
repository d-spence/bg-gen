import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { ColorPicker, createColor } from 'material-ui-color';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { randomHexValue, createCSSGradient } from '../utilities';
import { initialSettings } from '../config';

const GenSettings = ({ settings, setSettings, gradBg, setGradBg, handleAlertMsg }) => {
  const handleChange = (value) => {
    const newSettings = {...settings, ...value};
    const newGradientBg = createCSSGradient(
      newSettings.primaryColor.raw,
      newSettings.secondaryColor.raw,
      newSettings.gradAngle
    );

    console.log({newSettings})
    setSettings(newSettings);
    setGradBg(newGradientBg);
  }

  const randomizeColors = () => {
    const primaryColor = createColor(randomHexValue());
    const secondaryColor = createColor(randomHexValue());
    handleChange({primaryColor, secondaryColor});
  }

  const resetColors = () => {
    const { primaryColor, secondaryColor } = initialSettings;
    handleChange({primaryColor, secondaryColor});
    handleAlertMsg('Colors were reset');
  }

  const resetImageSize = () => {
    const { imageWidth, imageHeight } = initialSettings;
    handleChange({imageWidth, imageHeight});
    handleAlertMsg('Image size reset');
  }

  return (
    <form className="gen-settings">
      <Typography className="setting-label" variant="h6">Colors</Typography>
      <ColorPicker 
        id="primary-color"
        value={settings.primaryColor}
        onChange={e => {
          handleChange({primaryColor: createColor(`#${e.hex}`)});
        }}
      />
      <ColorPicker
        id="secondary-color"
        value={settings.secondaryColor}
        onChange={e => {
          handleChange({secondaryColor: createColor(`#${e.hex}`)});
        }}
      />
      <ButtonGroup fullWidth variant="text">
        <Button onClick={randomizeColors}>Random</Button>
        <Button onClick={resetColors}>Reset</Button>
      </ButtonGroup>
      <Typography className="setting-label" variant="h6">Angle</Typography>
      <Slider
        id="grad-angle"
        value={settings.gradAngle}
        aria-labelledby="gradient-angle"
        step={15}
        min={0}
        max={345}
        valueLabelDisplay="auto"
        valueLabelFormat={val => val + '°'}
        onChange={(_, val) => handleChange({gradAngle: val})}
      />
      <Typography className="setting-label" variant="h6">Size</Typography>
      <TextField
        id="img-width"
        label="Image Width"
        value={settings.imageWidth}
        onChange={e => handleChange({imageWidth: Number(e.target.value)})}
      />
      <TextField
        id="img-height"
        label="Image Height"
        value={settings.imageHeight}
        onChange={e => handleChange({imageHeight: Number(e.target.value)})}
      />
      <Button onClick={resetImageSize}>Reset</Button>
      <Typography className="setting-label" variant="h6">CSS</Typography>
      <TextField
        disabled
        value={gradBg}
      />
      <CopyToClipboard
        text={gradBg}
        onCopy={() => handleAlertMsg('CSS copied to clipboard!')}
      >
        <Button>Copy</Button>
      </CopyToClipboard>
    </form>
  )
}

GenSettings.propTypes = {
  settings: PropTypes.object,
  setSettings: PropTypes.func,
  gradBg: PropTypes.string,
  setGradBg: PropTypes.func,
}

export default GenSettings
