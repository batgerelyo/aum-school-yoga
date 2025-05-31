import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

const GoogleLoginButton = () => {
  const handleGoogleLogin = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    // Use signInWithRedirect
    signInWithRedirect(auth, provider);
  };

  return (
    <div>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
};

export default GoogleLoginButton;
