import React, { useState } from 'react';
import { Col } from 'reactstrap';
import Dropzone from 'react-dropzone';
import styles from './ImageUploader.module.css';

const ImageUploader = () => {
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
    setSuccess(true);
  };

  return (
    <Col className={styles.imageUploader}>
      <Dropzone onDrop={onDrop} accept=".pdf,.doc,docx,.text">
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <h6 className={styles.header}>Drag and drop your files here
              <span> Or Browser Files</span>
            </h6>
          </div>
        )}
      </Dropzone>
      {success && (
        <div style={{ color: 'green' }} className={styles.load}>File succe dssfully uploaded! {file && <p>{file.name}</p>}</div>
      )}
      <p className={styles.p}>Only JPG, PNG files are allowed. Image must be less than 2 MB</p>
    </Col>
  );
}

export default ImageUploader;