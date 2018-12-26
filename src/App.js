import React, { Component } from 'react';
import AddUser from './AddUser';
import UserList from './UserList';
import './App.css';
import logo from './logo.svg';




class App extends Component {

  state = {
    users: []
  }

  createUser = user => {
    user.GamesPlay = 1;
    this.setState(currState => ({
      users: [...currState.users, user],
    }));
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <AddUser users={this.state.users} onAddUser={this.createUser} />
        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default App;
