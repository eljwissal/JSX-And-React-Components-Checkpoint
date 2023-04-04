import React from 'react';
import './App.css';
import ProfilePhoto from './components/profile/ProfilePhoto';
import FullName from './components/profile/FullName';
import Address from './components/profile/Address';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <ProfilePhoto />
      <FullName />
      <Address />
      </div>
    </div>
  );
}

export default App;

