import React from 'react';

class Friend extends React.Component {
  state = {
  }
  render() {
    return (
      <div className='friend-container'>
        {this.props.friends.map(friend => {
          return (
              <li key={friend.id} className="friend">
                  <div className="friend-name">{friend.name}</div>
                  <div className="friend-age"> {friend.age}</div>
                  <div className="friend-email"> {friend.email}</div>
              </li>
          );
      })}
    </div>
    );
  }
}

export default Friend;