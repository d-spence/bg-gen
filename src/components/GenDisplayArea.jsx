import React from 'react';
import GenImage from './GenImage';

const GenDisplayArea = ({ settings, gradBg }) => {
  return (
    <div className="gen-display">
      <div className="gen-display-body">
        <GenImage
          settings={settings}
          gradBg={gradBg}
        />
      </div>
      <footer className="gen-display-footer">
        <span>Copyright 2020, Dan Spencer</span>
      </footer>
    </div>
  )
}

export default GenDisplayArea
