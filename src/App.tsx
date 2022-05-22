import React from 'react';
import './App.css';

// Importing Components
import Navbar from './components/navbar/Navbar';
import Article from './components/article/Article';
import Feature from './components/feature/Feature';
import Cta from './components/cta/Cta';
import Brand from './components/brand/Brand';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Article />
      <Feature />
      <Cta />
      <Brand />
    </div>
  );
}

export default App;
