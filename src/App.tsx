import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Demo1 from './Components/Demo1';
import Demo2 from './Components/Demo2';
import Home from './Components/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<ContactUs />}>
        <Route path='about' element={<About />}>
          <Route path='demo1' element={<Demo1 />} />
          <Route path='demo2' element={<Demo2 />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
