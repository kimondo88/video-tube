import React from 'react';
import { Navbar } from './features/navbar/Navbar';
import { LeftMenu } from './features/navbar/Leftmenu';
import { Content } from './features/content/Content';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="flex">
        <LeftMenu/>
        <Content/>
      </div>
    </div>
  );
}

export default App;
