import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Post from './components/Post';
import './App.css';

function App() {
  return (
    <div id="root">
      <Navbar />
      <main>
        <Post />
        <Banner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
