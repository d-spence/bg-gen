import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { MdClose as CloseIcon } from 'react-icons/md';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'hsl(200, 75%, 50%)',
    color: 'white',
  },
  message: {
    marginLeft: 'auto',
    fontWeight: 'bold',
  }
})

const Alert = ({ alertMsg, showAlertMsg, setShowAlertMsg }) => {
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setShowAlertMsg(false);
  }

  return (
    <div>
      <Snackbar
        ContentProps={{
          classes: {
            root: classes.root,
            message: classes.message,
          }
        }}
        open={showAlertMsg}
        autoHideDuration={5000}
        onClose={handleClose}
        message={alertMsg}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        action={
          <React.Fragment>
            <IconButton aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  )
}

Alert.propTypes = {
  alertMsg: PropTypes.string,
  showAlertMsg: PropTypes.bool,
  setShowAlertMsg: PropTypes.func,
}

export default Alert
