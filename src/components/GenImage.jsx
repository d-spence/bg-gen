import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles({
  root: props => ({
    width: props.settings.imageWidth + 10,
    height: props.settings.imageHeight + 10,
    background: props.gradBg,
  })
});

const GenImage = (props) => {
  const classes = useStyles(props);

  return (
    <Slide direction="up" in={props.transition} mountOnEnter>
      <div className="gen-image">
        <div ref={props.imageRef} className={classes.root}></div>
      </div>
    </Slide>
  );
}

GenImage.propTypes = {
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  gradBg: PropTypes.string,
}

export default GenImage
