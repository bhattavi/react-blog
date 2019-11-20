import React from 'react';

import './App.css';
import Navebar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Blog from './components/Blog'


class App extends React.Component {
  constructor() {
    super()
  }
  state = {

  }



  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navebar />
          <Route exact path = '/' component={Home} /> 
          <Route path = '/:blog' component={Blog} /> 

        </div>
      </BrowserRouter>
    );
  }

}

export default App;

