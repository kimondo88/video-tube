import React from 'react';
import { Navbar } from './features/navbar/Navbar';
import { LeftMenu } from './features/navbar/Leftmenu';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LeftMenu/>
    </div>
  );
}

export default App;
