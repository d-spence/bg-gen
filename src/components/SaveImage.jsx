import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from'@material-ui/core/Button';
import html2canvas from 'html2canvas';

const SaveImage = ({ settings, imageRef }) => {
  const { imageWidth, imageHeight } = settings;
  const saveConfig = {
    scale: 1.0,
    width: imageWidth,
    height: imageHeight,
    scrollX: -5,
    scrollY: -5,
    backgroundColor: null,
  }

  const saveCanvas = (format) => {
    window.scroll(0,0); // scroll window to the top; fixes issue with output image
    console.log(imageRef.current); // debug
    html2canvas(imageRef.current, saveConfig)
      .then(canvas => {
        let link = document.createElement('a');
        link.setAttribute('download', `screenshot.${(format === 'jpeg' ? 'jpg' : format)}`);
        link.setAttribute('href', canvas.toDataURL(`image/${format}`).replace(`image/${format}`, "image/octet-stream"));
        link.click();
      });
  }

  return (
    <div className="gen-settings">
      <Typography className="setting-label" variant="h6">Save</Typography>
      <ButtonGroup fullWidth className="setting-button" variant="outlined">
        <Button onClick={() => saveCanvas('png')}>Save .PNG</Button>
        <Button onClick={() => saveCanvas('jpeg')}>Save .JPG</Button>
      </ButtonGroup>
    </div>
  )
}

SaveImage.propTypes = {
  settings: PropTypes.object,
  imageRef: PropTypes.object,
}

export default SaveImage
