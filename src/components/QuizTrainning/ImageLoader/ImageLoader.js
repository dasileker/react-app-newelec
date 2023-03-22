import React, { useState, useRef } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

const ImagLoader = () => {
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef(null);

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
    setSuccess(true);
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div onClick={handleUploadClick} style={{ cursor: 'pointer' }}>
        <FaCloudUploadAlt />
      </div>
      <input
        ref={fileInputRef}
        type="file"
        style={{ display: 'none' }}
        accept="image/*"
        onChange={(e) => onDrop(e.target.files)}
      />
    </div>
  );
};


export default ImagLoader;