import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import SignUp from './components/SignUp';
import Welcome from './components/Welcome';
import Container from './components/Container';
import Nope from './components/Nope';

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<SignUp />} />
       <Route path="Welcome" element={<Welcome />} />
       <Route path="Container" element={<Container />} />
       <Route path="*" element={<Nope />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
