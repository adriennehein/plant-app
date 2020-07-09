import React from 'react';
import './App.css';
import Indoor from './components/Indoor';
import Outdoor from './components/Outdoor';
import Wishlist from './components/Wishlist';
import Header from './components/Header';


function App() {
  return (
    <div className="app">
      <Header greenhouseName="Adrienne's Greenhouse" />
      <div className="greenhouse-collection">
        <Indoor />
        <Outdoor />
        <Wishlist />

      </div>
    </div>
  );
}

export default App;
