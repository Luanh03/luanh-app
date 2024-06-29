import * as react from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './containers/Home.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
