import React from 'react';
import './App.css';
import Navbar from './NavBar/Navbar';
import Main from './Main/Main';
import Footer from './Footer';

const App = () => {
    return (
      <div className="App">
        <Navbar/>
        <Main/>
        <Footer/>
      </div>
    );
  
}

export default App;
