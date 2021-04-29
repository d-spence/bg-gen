import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles({
  root: props => ({
    width: props.settings.imageWidth,
    height: props.settings.imageHeight,
    background: props.gradBg,
  })
});

const GenImage = (props) => {
  const classes = useStyles(props);

  return (
    <Slide direction="up" in={props.transition} mountOnEnter>
      <div className="gen-image">
        <div className={classes.root}></div>
      </div>
    </Slide>
  );
}

GenImage.propTypes = {

}

export default GenImage
