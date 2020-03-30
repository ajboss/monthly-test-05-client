import React, { Component } from 'react';
import './App.css';
import './card.css';
import { BrowserRouter, Route, Redirect} from 'react-router-dom';
import Tables from './components/Tables';
import Waiters from './components/Waiters';
import Order from './components/Order';

class App extends Component {
  render() {
    return (
      <BrowserRouter className="App" style={{height: '90vh'}}>
        <div>
          {/* <Tables />
          <Waiters />
          <Menu /> */}
          
        </div>

        <div>
          <Route exact path="/">
            <Redirect to="/table" />
          </Route>

          <Route exact path="/table">
            <Tables />
          </Route>
          <Route exact path="/waiter">
            <Waiters />
          </Route>
          <Route exact path="/order">
            <Order />
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;