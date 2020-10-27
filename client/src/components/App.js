import React, { useState } from 'react';
import './App.css';
import Login from './Login/Login';

const App = () => {
  const [userName, setUserName] = useState()

  return (
    <div>
      {userName}
      <Login setUserName={setUserName} />
    </div>
  );
}

export default App;
