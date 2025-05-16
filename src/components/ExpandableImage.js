import React, { useState } from 'react';
import './ExpandableImage.css';

function ExpandableImage({ src, alt, className }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={className}
        onClick={() => setExpanded(true)}
        style={{ cursor: 'zoom-in' }}
      />
      {expanded && (
        <div className="modal" onClick={() => setExpanded(false)}>
          <img src={src} alt={alt} className="modal-image" />
        </div>
      )}
    </>
  );
}

export default ExpandableImage;
