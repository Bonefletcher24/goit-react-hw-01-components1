import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(friend => (
      <li key={friend.id} className={css.item}>
        <span
          className={css.status}
          style={{ backgroundColor: friend.isOnline ? '#00ff00' : '#ff0000' }}
        ></span>
        <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
        <p className={css.name}>{friend.name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

