import React from 'react';
import Video from './Video';
import Home from './components/frontend/Home.jsx';
import {Route, Link} from 'react-router-dom';

function App() {
  return (
  <div class = "App">
    <Route exact path = "/" component = {Home}/>
    <Route exact path = "/video" component = {Video}/>
  </div>
  );
}

export default App;

