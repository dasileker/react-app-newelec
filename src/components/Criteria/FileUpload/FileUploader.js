import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import styles from './FileUploader.module.css';

function FileUploader() {
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);
  const [mediaUrl, setMediaUrl] = useState('');

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
    setSuccess(true);
  };

  const handleMediaUrlChange = (event) => {
    setMediaUrl(event.target.value);
  };

  const handleSuccessClose = () => {
    setSuccess(false);
  }

  return (
    <div className={styles.fileUploader}>
      <Dropzone onDrop={onDrop} accept=".pdf,.ppt,.pptx,.ppsx,.mp4,.avi,.wmv,.mov">
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop a video, PDF, or slideshow file here, or click to select a file</p>
          </div>
        )}
      </Dropzone>
      {success && (
        <div style={{ backgroundColor: 'green', color: 'white', padding: '10px' }}>
          Completed
          {file && <p>{file.name}</p>}
          <button onClick={handleSuccessClose} style={{ marginLeft: '10px' }}>
            {/* <FontAwesomeIcon icon={faTimes} /> */}
            close
          </button>
        </div>
      )}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <hr style={{ flexGrow: 1 }} />
        <span style={{ margin: '0 10px' }}>OR</span>
        <hr style={{ flexGrow: 1 }} />
      </div>
      <label>
        Media URL:
        <input type="text" value={mediaUrl} onChange={handleMediaUrlChange} />
      </label>
    </div>
  );
}

export default FileUploader;
