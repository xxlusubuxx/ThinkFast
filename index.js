// pages/index.js
import { useEffect, useState } from 'react';

const IndexPage = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger the fade-in effect after the component mounts
    setFadeIn(true);
  }, []);

  return (
    <div
      style={{
        background: 'purple',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: fadeIn ? 1 : 0, // Apply the fade-in effect
        transition: 'opacity 1s ease',
      }}
    >
      <h1 style={{ color: 'white' }}>Welcome back</h1>
    </div>
  );
};

export default IndexPage;
