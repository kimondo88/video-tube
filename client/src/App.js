import React from 'react';
import { Navbar } from './features/navbar/Navbar';
import { LeftMenu } from './features/navbar/Leftmenu';
import { Content } from './features/content/Content';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="flex">
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path='/discover' element={<Home/>}/>
        <Route path='/shorts' element={<Home/>}/>
      </Routes>
      </div>
    </div>
  );
}

function Home(){
  return (
    <>
    <LeftMenu/>
    <Content/>
    </>
  )
}

export default App;
