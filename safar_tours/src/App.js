import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Navbar from './components/Navbar';
import Bookcar from './components/Bookcar';
import Booktrip from './components/Booktrip';
import Counts from './components/Counts';
import Footer from './components/Footer';
import Packages from './components/Packages';
import Services from './components/Services';
import Subscribe from './components/Subscribe';
import Testimonial from './components/Testimonial';
import Video from './components/Video';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Dashboard />
        <Bookcar />
        <Services />
        <Booktrip />
        <Counts />
        <Packages />
        <Video />
        <Subscribe />
        <Testimonial />
        <Footer />


      </div>
    </BrowserRouter>
  );
}

export default App;
