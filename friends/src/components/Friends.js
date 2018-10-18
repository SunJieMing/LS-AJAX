import React from 'react';
import Friend from './Friend';

const Friends = props => {
    return (
      <div className='friends'>
        {props.friendList.map(friend =>
            <Friend key={friend.id} {...friend} editFriend={props.editFriend}
            deleteFriend={props.deleteFriend}/>
          )}
      </div>
    )
  }

export default Friends;
