import React, { Component } from 'react';
import axios from 'axios';

import Friend from './components/friend';
import FriendsForm from './components/FriendsForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { friends: [] };
    this.url = 'http://localhost:5000/friends';
  }

  componentDidMount() {
    this.getFriends(this.url);
  }

  getFriends = URL => {
    axios
      .get(URL)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  };

  deleteFriend = id => {
    axios
      .delete(`${this.url}/${id}`)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  };

  updateFriends = friends => {
    this.setState({ friends });
  };

  renderFriends = () => {
    return this.state.friends.map(friend => (
      <Friend key={friend.id} friend={friend} deleteFriend={this.deleteFriend} />
    ));
  };

  render() {
    return (
      <div className="App">
        <FriendsForm id={this.state.friends.length} updateFriends={this.updateFriends} />
        <ul className="friend-list">{this.renderFriends()}</ul>
      </div>
    );
  }
}

export default App;
