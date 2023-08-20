import React, { useState } from 'react';
import Webcam from 'react-webcam';

const QRScan = () => {
  const [scannedData, setScannedData] = useState('');

  const handleScan = (data) => {
    if (data) {
      setScannedData(data);
    }
  };

  const webcamRef = React.useRef(null);

  const videoConstraints = {
    facingMode: 'environment',
  };

  return (
    <div className='bg-gray-900'>
      <Webcam
        ref={webcamRef}
        onScan={handleScan}
        videoConstraints={videoConstraints}
      />
      {scannedData && <p>Scanned Data: {scannedData}</p>}
    </div>
  );
};

export default QRScan;
