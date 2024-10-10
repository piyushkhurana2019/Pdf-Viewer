// app/page.js
'use client'; // Enable client-side rendering

import { useState } from 'react';
import styles from './Home.module.css';

export default function Home() {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfUrl, setPdfUrl] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setPdfFile(file);
      setPdfUrl(URL.createObjectURL(file));
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  const handleUpload = (event) => {
    event.preventDefault();
    // You can implement additional logic for handling the uploaded file if needed
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Upload and View PDF</h1>
      <form className={styles.form} onSubmit={handleUpload}>
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          className={styles.fileInput}
        />
        <button type="submit" className={styles.uploadButton}>Upload</button>
      </form>
      {pdfUrl && (
        <div className={styles.pdfViewer}>
          <h2>Uploaded PDF:</h2>
          <iframe
            class="iframe"
            src={pdfUrl}
            width="600"
            height="500"
            style={{ border: 'none' }}
            title="PDF Viewer"
          />
        </div>
      )}
    </div>
  );
}
