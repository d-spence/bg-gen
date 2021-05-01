import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';
import GenSettings from './GenSettings';
import SaveImage from'./SaveImage';

const SideBar = ({ settings, setSettings, gradBg, setGradBg,
                   handleAlertMsg, handleTransition, imageRef }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-banner">
        <Typography variant="h5" className="sidebar-title">BG-GEN</Typography>
        <Typography className="sidebar-heading">Gradient Background</Typography>
      </div>
      <GenSettings
        settings={settings}
        setSettings={setSettings}
        gradBg={gradBg}
        setGradBg={setGradBg}
        handleAlertMsg={handleAlertMsg}
        handleTransition={handleTransition}
      />
      <SaveImage
        settings={settings}
        imageRef={imageRef}
      />
    </div>
  )
}

SideBar.propTypes = {
  title: PropTypes.string,
  settings: PropTypes.object,
  gradBg: PropTypes.string,
  setSettings: PropTypes.func,
  handleAlertMsg: PropTypes.func,
}

export default SideBar
