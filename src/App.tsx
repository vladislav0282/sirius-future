import React from 'react';

import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Content from './components/Content/Content';


function App() {
  return (
    <div className="Container">
      <Navbar/>
      <div>
      <Header/>

<Content/>

      </div>
      
      
      
      

    </div>
    
    
    
  );
}

export default App;
