import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  genImageMain: props => ({
    width: props.settings.imageWidth,
    height: props.settings.imageHeight,
    background: props.gradBg,
  })
});

const GenImage = (props) => {
  const classes = useStyles(props);

  return (
    <div className="gen-image">
      <div className={classes.genImageMain}></div>
    </div>
  )
}

GenImage.propTypes = {

}

export default GenImage
