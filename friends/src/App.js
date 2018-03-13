import React, { Component } from 'react';

import DisplayFriends from './components/DisplayFriends';
import { Route } from 'react-router-dom';
import Nav from './components/Nav'


import './App.css';

import UpdateFriend from './components/UpdateFriend';

class App extends Component {
  

  render() {
    return (
      <div className="App">
        <Nav />
        {/* <Route path='/' component={Nav} /> */}
        <Route exact path='/' component={DisplayFriends}/>
        <Route path='/input/' component={UpdateFriend} />

      </div>
    );
  }

  
}

export default App;
