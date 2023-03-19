import React, { useState } from 'react';
import Dropzone from 'react-dropzone';


const ImageUploader = () => {
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
    setSuccess(true);
  };

  return (
    <div>
      <Dropzone onDrop={onDrop} accept=".pdf,.doc,docx,.text">
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag and drop your files here <span class="under">Or Browser Files</span> </p>
          </div>
        )}
      </Dropzone>
      {success && (
        <div style={{ color: 'green' }}>File succe dssfully uploaded!</div>
      )}
      <p>*Only JPG, PNG files are allowed. Image must be less than 2 MB</p>
      {file && <p>{file.name}</p>}
    </div>
  );
}

export default ImageUploader;