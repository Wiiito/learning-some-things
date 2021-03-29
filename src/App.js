import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import MostWatched from './components/MostWatched'
import Trending from './components/Trending'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path='/' exact={true}>
            <MostWatched />
            <Trending />
          </Route>
          <Route path='info/:id'>

          </Route>
        </Switch>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
