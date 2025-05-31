import React, { useEffect } from 'react';
import { getAuth, GoogleAuthProvider, signInWithRedirect, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { app } from '../firebase/config';
import './Login.css';

const Login = ({ onUserLogin }) => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.error('Google Sign-In error:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/submitNewPoster');
      } else {
      }
    });

  
    return () => unsubscribe();
  }, [auth, navigate]);

  return (
    <div className="login-container"> 
      <h2>Нэвтрэх</h2>
      <button className="google-login-btn" onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;
