import { useState } from 'react';

export const Button = () => {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <p>Number: {number}</p>
      <button
        onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}
      >
        +3
      </button>
    </div>
  );
};
