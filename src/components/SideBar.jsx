import React from 'react'
import PropTypes from 'prop-types'

import Typography from '@material-ui/core/Typography';
import GenSettings from './GenSettings';

const SideBar = ({ title }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-banner">
        <Typography className="sidebar-title">BG-GEN</Typography>
        <Typography className="sidebar-heading">{title}</Typography>
      </div>
      <GenSettings />
    </div>
  )
}

SideBar.defaultProps = {
  title: 'testing',
}

SideBar.propTypes = {
  title: PropTypes.string,
}

export default SideBar
