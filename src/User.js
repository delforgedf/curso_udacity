import React from 'react';
import PropTypes from 'prop-types';

const User = props => {
  return (
    <li className="user">
      <p>NickName: {props.user.nickName}</p>
      <p className={!props.showGamesPlayed ? "hidden" : ''}> Jogos jogados: {props.showGamesPlayed ? props.user.GamesPlay : '*'}</p>
    </li>
  );
};

User.propTypes = {
  showGamesPlayed: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

export default User;
