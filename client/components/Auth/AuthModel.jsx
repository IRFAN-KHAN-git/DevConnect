import React, { useEffect, useState } from 'react';
import Login from './Login';
import Signup from './Signup';

const AuthModal = ({ isOpen, onClose, initialMode = 'login' }) => {
  const [mode, setMode] = useState(initialMode); // 'login' or 'signup'
   useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);

  if (!isOpen) return null;

  return (
    <>
      {mode === 'login' ? (
        <Login
          isShown={onClose}
          onClose={onClose}
          switchToSignup={() => setMode('signup')}
        />
      ) : (
        <Signup
          isShown={onClose}
          onClose={onClose}
          switchToLogin={() => setMode('login')}
        />
      )}
    </>
  );
};

export default AuthModal;