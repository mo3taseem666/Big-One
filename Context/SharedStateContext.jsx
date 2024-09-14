import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

// Create the context
const SharedStateContext = createContext();

// Custom hook to use the context
export const useSharedState = () => useContext(SharedStateContext);

// Provider component
export const SharedStateProvider = ({ children }) => {
  const [a, setA] = useState(); // Declare state

  return (
    <SharedStateContext.Provider value={{ a, setA }}>
      {children}
    </SharedStateContext.Provider>
  );
};

// Define prop types
SharedStateProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that 'children' is a valid React node and is required
};
