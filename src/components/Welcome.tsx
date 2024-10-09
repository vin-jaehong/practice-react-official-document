import { useState } from 'react';
import './welcome.css';

export const Welcome = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>{show ? 'Remove' : 'Show'}</button>
      <hr />
      {show && <h1 className="welcome">Welcome</h1>}
    </>
  );
};
