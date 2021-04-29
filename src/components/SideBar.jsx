import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';
import GenSettings from './GenSettings';

const SideBar = ({ settings, setSettings, gradBg, setGradBg,
                   handleAlertMsg, handleTransition }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-banner">
        <Typography className="sidebar-title">BG-GEN</Typography>
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
    </div>
  )
}

SideBar.propTypes = {
  title: PropTypes.string,
  settings: PropTypes.object,
  gradBg: PropTypes.string,
  setSettings: PropTypes.func,
  handleAlertMsg: PropTypes.bool,
}

export default SideBar
