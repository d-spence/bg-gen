import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

const SideBar = ({ title }) => {
  const classes = useStyles();

  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebarBanner}>
        <Typography className={classes.siteTitle}>BGEN</Typography>
        <Typography className={classes.pageTitle}>{title}</Typography>
      </div>

    </div>
  )
}

SideBar.defaultProps = {
  title: 'testing',
}


SideBar.propTypes = {
  title: PropTypes.string,
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  sidebar: {
    width: '300px',
    height: '100vh',
    overflowY: 'auto',
    background: '#ddd',
    borderRight: '1px solid black',
  },
  sidebarBanner: {
    display: 'flex',
    borderBottom: '1px solid black',
  },
  siteTitle: {
    padding: '20px',
    backgroundColor: 'green',
    fontSize: '1.4rem',
  },
  pageTitle: {
    flexGrow: 1,
    alignSelf: 'center',
    textAlign: 'center',
  },
}));

export default SideBar
