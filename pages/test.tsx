// components/Welcome.tsx
import { useEffect, useState } from 'react';

const Welcome: React.FC = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger the fade-in effect after the component mounts
    setFadeIn(true);
  }, []);

  return (
    <div
      style={{
        background: 'purple',
        opacity: fadeIn ? 1 : 0, // Set opacity based on fade-in state
        transition: 'opacity 1s ease', // Smooth transition
      }}
    >
      <h1>Welcome!</h1>
    </div>
  );
};

export default Welcome;
