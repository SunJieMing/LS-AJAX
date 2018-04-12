import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import FriendsList from './components/FriendsList'
import { makeFetch } from './utils'
import AddFriendForm from './components/AddFriendForm'

const helper = makeFetch('http://localhost:5000')

const FriendsListWrapper = props => <FriendsList friends={props.friends} />

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      friends: []
    }
  }
  setInitialState () {
    helper('/friends').then(({ data }) =>
      this.setState(prevState => ({ friends: [...data] }))
    )
  }

  componentDidMount () {
    this.setInitialState()
  }

  render () {
    return (
      <div className='App'>
        <Route
          path='/'
          render={props => (
            <div>
              <AddFriendForm />
              <FriendsListWrapper friends={this.state.friends} />
            </div>
          )}
        />
      </div>
    )
  }
}

export default App
