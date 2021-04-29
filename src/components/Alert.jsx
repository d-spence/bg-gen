import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import { MdClose as CloseIcon } from 'react-icons/md';

const Alert = ({ alertMsg, showAlertMsg, setShowAlertMsg }) => {
  useEffect(() => {
    // Show the alert message if alertMsg state is updated
    setShowAlertMsg(true);
  }, [alertMsg, setShowAlertMsg]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setShowAlertMsg(false);
  }

  return (
    <div className="alert-msg">
      <Snackbar
        open={showAlertMsg}
        autoHideDuration={6000}
        onClose={handleClose}
        message={alertMsg}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
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
}

export default Alert
