import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Welcome from './components/Welcome';
import Page from './components/Page';
import Nope from './components/Nope';
import Container from './components/Container';


  function App() {
  return( 
    <div>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Container />} />
       <Route path="Welcome" element={<Welcome />} />
       <Route path="Page" element={<Page />} />
       <Route path="*" element={<Nope />} />
      </Routes>
    </BrowserRouter>
    </div>
  ) 
}

export default App;
