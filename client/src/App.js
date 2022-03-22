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
        <Route path='/home' element={<Test/>}/>
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

function Test(){
  return(
    <div>Hello World<br/><br/>XXX</div>
  )
}
export default App;
