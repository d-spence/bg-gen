import React from 'react';
import GenImage from './GenImage';

const GenDisplayArea = ({ settings, gradBg, transition, imageRef }) => {
  return (
    <div className="gen-display">
      <div className="gen-display-body">
        <GenImage
          settings={settings}
          gradBg={gradBg}
          transition={transition}
          imageRef={imageRef}
        />
      </div>
      <footer className="gen-display-footer">
        <span>© 2020, <a href="https://dspence.net/" target="_blank" rel="noreferrer">Dan Spencer</a></span>
      </footer>
    </div>
  )
}

export default GenDisplayArea;
