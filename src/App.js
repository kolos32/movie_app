import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Detail from './components/Detail';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return ( 
    <Router>
    <Navigation />
        <Route path='/' exact={true} component={Home} />
        <Route path='/about' component={About} />
        <Route path='/movie/:id' component={Detail} />
    </Router>
  );
}

export default App;