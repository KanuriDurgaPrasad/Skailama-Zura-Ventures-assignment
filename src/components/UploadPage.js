import React, { useState } from 'react';
import './UploadPage.css';
import youtubeIcon from '../images/youtube_icon.png';
import spotifyIcon from '../images/spotify_icon.png';
import rssIcon from '../images/rss_icon.png';
import uploadIcon from '../images/upload_icon.png';
import YoutubePopup from './YoutubePopup';

const UploadPage = ({ match }) => {
  const { projectName } = match.params;
  const [isYoutubePopupOpen, setIsYoutubePopupOpen] = useState(false);

  const openYoutubePopup = () => {
    setIsYoutubePopupOpen(true);
  };

  const closeYoutubePopup = () => {
    setIsYoutubePopupOpen(false);
  };

  return (
    <div className="upload-page">
      <header className="upload-header">
        <h1>Upload</h1>
        <nav>
          <a href="/">Home</a> / <a href="/">{projectName}</a> / <span>Upload</span>
        </nav>
      </header>

      <main className="upload-content">
        <h2>{projectName}</h2>
        <div className="upload-options">
          <button className="upload-option" onClick={openYoutubePopup}>
            <img src={youtubeIcon} alt="Upload YouTube Video" />
            <span>Upload YouTube Video</span>
          </button>
          <button className="upload-option">
            <img src={spotifyIcon} alt="Upload Spotify Podcast" />
            <span>Upload Spotify Podcast</span>
          </button>
          <button className="upload-option">
            <img src={rssIcon} alt="Upload from RSS Feed" />
            <span>Upload from RSS Feed</span>
          </button>
        </div>
        <div className="upload-divider">or</div>
        <div className="file-upload">
          <img src={uploadIcon} alt="Upload Icon" />
          <p>Select a file or drag and drop here (Podcast Media or Transcription Text)</p>
          <button className="select-file-button">Select File</button>
        </div>
      </main>

      <YoutubePopup isOpen={isYoutubePopupOpen} onClose={closeYoutubePopup} />
    </div>
  );
};

export default UploadPage;
