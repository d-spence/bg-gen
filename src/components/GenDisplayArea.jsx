import { Typography } from '@material-ui/core';
import React from 'react';
import GenImage from './GenImage';

const GenDisplayArea = ({ settings, gradBg, transition }) => {
  return (
    <div className="gen-display">
      <div className="gen-display-body">
        <GenImage
          settings={settings}
          gradBg={gradBg}
          transition={transition}
        />
      </div>
      <footer className="gen-display-footer">
        <span>© 2020, Dan Spencer</span>
      </footer>
    </div>
  )
}

export default GenDisplayArea;
