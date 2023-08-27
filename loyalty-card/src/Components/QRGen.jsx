import React, { useState, useRef } from 'react';
import QRCode from 'react-qr-code';

const QRGen = () => {
  const [qrData, setQrData] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerAge, setCustomerAge] = useState('');
  const qrCodeRef = useRef(null);
  const [copyNotification, setCopyNotification] = useState('');

  const generateQRCode = () => {
    const inputData = `${customerName} - Age: ${customerAge}`;
    setQrData(inputData);
  };

  const downloadQRCode = () => {
    const qrCodeImage = qrCodeRef.current.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = qrCodeImage;
    link.download = 'qrcode.png';
    link.click();
  };

  const copyQRCode = () => {
    const qrCodeImage = qrCodeRef.current.toDataURL('image/png');
    navigator.clipboard.writeText(qrCodeImage).then(() => {
      setCopyNotification('QR code image copied to clipboard!');
      setTimeout(() => setCopyNotification(''), 3000); 
    });
  };

  return (
    <div className='bg-gray-900 '>
      <div className='pt-5 px-10'>
        <label className='font-bold text-white/90' htmlFor="name">Customer's Name: </label>
        <input
          className='bg-gray-300 rounded'
          type="text"
          id="name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
      </div>
      <div className='pt-5 px-10'>
        <label className='font-bold text-white/90 ' htmlFor="age">Customer's Age: </label>  
        <input
          className='bg-gray-300 rounded'
          type="number"
          id="age"
          value={customerAge}
          onChange={(e) => setCustomerAge(e.target.value)}
        />
      </div>
      <button onClick={generateQRCode} className='bg-gray-500 rounded text-white/90 font-bold px-5 py-2'>
        Generate QR Code
      </button>
      {qrData && (
        <div>
          <QRCode value={qrData} ref={qrCodeRef} />
          <div className="mt-3">
            <button onClick={downloadQRCode} className="bg-blue-500 rounded text-white/90 font-bold px-4 py-2 mr-2">
              Download QR Code
            </button>
            <button onClick={copyQRCode} className="bg-green-500 rounded text-white/90 font-bold px-4 py-2">
              Copy QR Code Image
            </button>
            {copyNotification && (
              <p className="text-green-500 font-medium mt-2">{copyNotification}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default QRGen;
