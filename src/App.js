import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Blog from './components/Blog'
import ScrollToTop from './ScrollToTop';
require('dotenv').config();


class App extends React.Component {

  render() {
    return (

      <BrowserRouter>
      
        <div className="App bg-light">
          <ScrollToTop>
          <Route exact path='/' component={Home} />
          <Route path='/:blog' component={Blog} />
          </ScrollToTop>
        </div>
      </BrowserRouter>

    );
  }

}

export default App;

