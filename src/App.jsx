// App.js
import useToggle from './CustomHooks/useToggle'; // Import the custom hook

const App = () => {
  const [isVisible, toggleVisibility] = useToggle(false); // Use the toggle hook with initial false state

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Message
      </button>
      {isVisible && <p>This message is toggled!</p>}{' '}
      {/* Show message based on state */}
    </div>
  );
};

export default App;
