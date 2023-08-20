import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const QRGen = () => {
  const [qrData, setQrData] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerAge, setCustomerAge] = useState('');

  const generateQRCode = () => {

    const inputData = `${customerName} - Age: ${customerAge}`;
    setQrData(inputData);
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
      <button onClick={generateQRCode} className='bg-gray-500 rounded text-white/90 font-bold  px-5 py-5'>Generate QR Code</button>
      {qrData && <QRCode value={qrData} />}
    </div>
  );
};

export default QRGen;
