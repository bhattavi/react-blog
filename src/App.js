import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Blog from './components/Blog'
require('dotenv').config();


class App extends React.Component {

  render() {
    return (
      
        <BrowserRouter>
          <div className="App">

            <Route exact path='/' component={Home} />
            <Route path='/:blog' component={Blog} />

          </div>
        </BrowserRouter>
      
    );
  }

}

export default App;

