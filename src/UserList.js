import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User'

class UserList extends Component{
  
  state = {
    showGamesPlayed: true,
  };

  toggleGamesPlayedPanel = () => {
    this.setState(oldState => ({
      showGamesPlayed: !oldState.showGamesPlayed,
    }));
  };

  render(){

    const { showGamesPlayed } = this.state;
    const { users } = this.props;
    
    const gamesPlayedButton = (
      <div>
        <button className="smallButton" onClick={this.toggleGamesPlayedPanel}>
          {showGamesPlayed ? 'hide ' : 'show '}
          numero de jogos jogados
        </button>
      </div>
    );
    
    return (
      <div>
        <h1>Lista de usuarios</h1>
        {users && users.length > 0 ? gamesPlayedButton : ''}
        <ol>
          {users.map(user => (
            <User key={user.nickName} user={user} showGamesPlayed={showGamesPlayed} />
          ))}
        </ol>
      </div>
    )
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
};
export default UserList;