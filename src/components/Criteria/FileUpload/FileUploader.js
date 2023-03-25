import React, { useState } from 'react';
// import { Col } from 'reactstrap';
import { AiTwotoneCloseCircle } from 'react-icons/ai';
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
            <p className={styles.p}>Drag 'n' drop a video, PDF.
              <span>Or <a className={styles.a}>Browse a file</a></span>
            </p>
          </div>
        )}
      </Dropzone>
      {success && (
        <div className={styles.successContainer}>
          {file && <p className={styles.tag}> Completed {file.name}</p>}
          <button onClick={handleSuccessClose} className={styles.closeButton}>
            <AiTwotoneCloseCircle />
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
        <input type="text" value={mediaUrl} onChange={handleMediaUrlChange} placeholder="Add your URL here" />
      </label>
    </div>
  );
}

export default FileUploader;
