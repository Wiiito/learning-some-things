import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import MostWatched from './components/MostWatched'
import Trending from './components/Trending'

function App() {
  return (
    <div>
      <Header />
      <MostWatched />
      <Trending />
      <Footer />
    </div>
  );
}

export default App;
