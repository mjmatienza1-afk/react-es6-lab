import React from 'react';
import Counter from './Counter.jsx';
import UserAPI from './UserAPI.jsx';

function App() {
  const isLoggedIn = true; // Change to false to test

  return (
    <div>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in</p>}

      <hr />

      <Counter />

      <hr />

      <UserAPI />
    </div>
  );
}

export default App;