import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { ColorPicker, createColor } from 'material-ui-color';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { randomHexValue, createCSSGradient } from '../utilities';
import { initialSettings } from '../config';

const GenSettings = ({ settings, setSettings, gradBg, setGradBg, 
                       handleAlertMsg, handleTransition }) => {
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
    handleTransition();
    setTimeout(() => {
      handleChange({primaryColor, secondaryColor});
    }, 200);
  }

  const resetColors = () => {
    const { primaryColor, secondaryColor } = initialSettings;
    handleTransition();
    setTimeout(() => {
      handleChange({primaryColor, secondaryColor});
      handleAlertMsg('Colors reset');
    }, 200);
  }

  const resetImageSize = () => {
    const { imageWidth, imageHeight } = initialSettings;
    handleTransition();
    setTimeout(() => {
      handleChange({imageWidth, imageHeight});
      handleAlertMsg('Image size reset');
    }, 300);
  }

  return (
    <form className="gen-settings">
      <Typography className="setting-label" variant="h6">Colors</Typography>
      <ColorPicker 
        value={settings.primaryColor}
        onChange={e => {
          handleChange({primaryColor: createColor(`#${e.hex}`)});
        }}
      />
      <ColorPicker
        value={settings.secondaryColor}
        onChange={e => {
          handleChange({secondaryColor: createColor(`#${e.hex}`)});
        }}
      />
      <ButtonGroup fullWidth className="setting-button" variant="outlined">
        <Button onClick={randomizeColors}>Random</Button>
        <Button onClick={resetColors}>Reset</Button>
      </ButtonGroup>
      <Typography className="setting-label" variant="h6">Angle</Typography>
      <Slider
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
        label="Image Width"
        value={settings.imageWidth}
        onChange={e => handleChange({imageWidth: Number(e.target.value)})}
      />
      <TextField
        label="Image Height"
        value={settings.imageHeight}
        onChange={e => handleChange({imageHeight: Number(e.target.value)})}
      />
      <ButtonGroup fullWidth className="setting-button" variant="outlined">
        <Button onClick={resetImageSize}>Reset</Button>
      </ButtonGroup>
      <Typography className="setting-label" variant="h6">CSS</Typography>
      <TextField
        disabled
        value={gradBg}
      />
      <CopyToClipboard
        text={gradBg}
        onCopy={() => handleAlertMsg('CSS copied to clipboard!')}
      >
        <ButtonGroup fullWidth className="setting-button" variant="outlined">
          <Button>Copy</Button>
        </ButtonGroup>
      </CopyToClipboard>
    </form>
  )
}

GenSettings.propTypes = {
  settings: PropTypes.object,
  setSettings: PropTypes.func,
  gradBg: PropTypes.string,
  setGradBg: PropTypes.func,
  handleAlertMsg: PropTypes.func,
  handleTransition: PropTypes.func,
}

export default GenSettings
