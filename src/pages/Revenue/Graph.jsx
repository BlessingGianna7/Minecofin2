import React, { useState, useEffect } from 'react';

const Graph = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const clampedProgress = Math.min(100, Math.max(0, 64));
    const calculatedRotation = (clampedProgress / 100) * 360;
    setRotation(calculatedRotation);
  }, [64]);

  return (
    <div className="w-32 h-32 relative">
      <div className="w-full h-full rounded-full bg-gray-300 absolute"></div>
      <div
        className="w-full h-full rounded-full bg-blue-500 absolute"
        style={{ clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 ${rotation}%)` }}
      ></div>
      <div className="w-full h-full flex items-center justify-center absolute">
        <span className="text-xl font-semibold">64%</span>
      </div>
    </div>
  );
};

export default Graph;
