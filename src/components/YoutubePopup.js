import React, { useState } from 'react';
import './YoutubePopup.css';
import youtubeIcon from '../images/youtube_icon.png';

const YoutubePopup = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  if (!isOpen) {
    return null;
  }

  const handleUpload = () => {
    console.log('Name:', name);
    console.log('Link:', link);
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <div className="popup-header">
          <img src={youtubeIcon} alt="YouTube" className="popup-icon" />
          <h2>Upload from YouTube</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="popup-body">
          <label>
            Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Link
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </label>
        </div>
        <div className="popup-footer">
          <button className="upload-button" onClick={handleUpload}>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default YoutubePopup;