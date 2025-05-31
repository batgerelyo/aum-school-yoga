import React, { useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import './LogOut.css'; 

const LogOut = () => {
  const [message, setMessage] = useState('');

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      setMessage('ГАРСАН ШҮҮ');
    } catch (error) {
      console.error('Logout error:', error);
      setMessage('Logout failed');
    }
  };

  return (
    <div className="logout-container"> 
      <h2>Гарах</h2>
      <button className="logout-btn" onClick={handleLogout}>Гарах</button>
      <p className="message">{message}</p>
    </div>
  );
};

export default LogOut;

