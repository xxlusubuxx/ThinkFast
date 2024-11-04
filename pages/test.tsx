// components/Welcome.tsx
import { useEffect, useState } from 'react';

const Welcome: React.FC = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger the fade-in effect after the component mounts
    setFadeIn(true);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-4xl font-bold" style={{
        background: 'purple',
        opacity: fadeIn ? 2 : 0, // Set opacity based on fade-in state
        transition: 'opacity 2s ease', // Smooth transition
      }}>Hello, World!</h1>
    </div>
  );
};

export default Welcome;
