import React, { Component, Fragment } from 'react';
import axios from 'axios';
import FriendsForm from './components/FriendsForm';
import FriendsList from './components/FriendsList';
import './App.css';

const URL = 'http://localhost:5000/friends';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsData: [],
      friendName: '',
      friendAge: '',
      friendEmail: ''
    };
  }

  componentDidMount() {
    axios.get(URL)
      .then(res => {
        console.log('GET RESPONSE', res);
        this.setState({friendsData: res.data});
      })
      .catch(error => console.log(error));
  }

  handleNameChange = e => {
    this.setState({friendName: e.target.value});
  }

  handleAgeChange = e => {
    this.setState({friendAge: Number(e.target.value)});
  }

  handleEmailChange = e => {
    this.setState({friendEmail: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();

    if(this.state.friendName === '') {
      return alert('Please enter a name!');
    } else if(this.state.friendAge === '') {
      return alert('Please enter an age!');
    } else if(this.state.friendEmail === '') {
      return alert('Please enter an email!');
    }

    const friend = {
      'id': this.state.friendsData.length + 1,
      'name': this.state.friendName,
      'age': Number(this.state.friendAge),
      'email': this.state.friendEmail
    };

    axios.post(URL, friend)
      .then(res => {
        console.log('POST RESPONSE', res);
        this.setState({
          friendsData: res.data,
          friendName: '',
          friendAge: '',
          friendEmail: ''
        }); 
      })
      .catch(error => console.log(error));
  };

  handleUpdate = (id) => {
    // console.log(id, name, age, email);

    const friend = {
      name: this.state.friendName,
      age: Number(this.state.friendAge),
      email: this.state.friendEmail
    };

    axios.put(`${URL}/${id}`, friend)
      .then(res => {
        console.log("PUT RESPONSE", res)
        this.setState({
          friendsData: res.data,
          friendName: '',
          friendAge: '',
          friendEmail: ''
        });
      })
      .catch(err => console.log(err));
  };

  handleDelete = id => {
    // console.log(id);
    axios.delete(`${URL}/${id}`)
      .then(res => {
        console.log('DELETE RESPONSE', res);
        this.setData(res.data);
      })
      .catch(err => console.log(err));
  };

  setData = data => {
    this.setState({friendsData: data});
  };
  
  render() {
    return (
      <Fragment>
        <div className="App">
          <h1>Friends App</h1>
          <FriendsForm
            handleNameChange={this.handleNameChange}
            handleAgeChange={this.handleAgeChange}
            handleEmailChange={this.handleEmailChange}
            handleSubmit={this.handleSubmit}
            friendName={this.state.friendName}
            friendAge={this.state.friendAge}
            friendEmail={this.state.friendEmail}
          />
          <FriendsList handleUpdate={this.handleUpdate} handleDelete={this.handleDelete} friendsData={this.state.friendsData} />
        </div>
      </Fragment>
    );
  }
}

export default App;
