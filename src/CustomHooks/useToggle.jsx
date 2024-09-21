import { useState } from 'react';

const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);

  // Toggle the state between true and false
  const toggle = () => {
    setState((prev) => !prev);
  };

  return [state, toggle]; // Return state and toggle function
};

export default useToggle;
