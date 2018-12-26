import React , {Component} from 'react';
import PropTypes from 'prop-types';

class AddUser extends Component{

  state = {
    user: {
      firstName: '',
      lastName: '',
      nickName: '',
    },
    userExists: false,
  };

  userExist =  nickname => {
    const users = this.props.users;
    for (let user of users){
      if( user.nickName === nickname){
        return true;
      }
      return false;
    }
  }

  handleSubmit = event =>{
    event.preventDefault();
    const userExists = this.userExist(this.state.user.nickName);
    if (!userExists) {
      this.props.onAddUser(this.state.user);
      console.log(this.state.user);
      this.setState({
        user: {
          firstName: '',
          lastName: '',
          nickName: '',
        }
      });
    }

    this.setState(() => ({
      userExists,
    }));
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState(currState => ({
      ...currState,
      user: {
        ...currState.user,
        [name]: value,
      },
    }));
  };

  isDisabled = () => {
    const { firstName, lastName, nickName } = this.state.user;
    return firstName === '' || lastName === '' || nickName === '';
  };



  render() {
    const { firstName, lastName, nickName } = this.state.user;

    return (
      <div>
        <h1>Novo Usuario</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              value={firstName}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              value={lastName}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="nickName"
              placeholder="Enter nickName"
              value={nickName}
              onChange={this.handleInputChange}
            />
          </div>
          <button disabled={this.isDisabled()}>Add</button>
        </form>
        {this.state.userExists ? (
          <p className="error">Você nao pode inserir prq o usuario ja existe</p>
        ) : (
          ''
        )}
      </div>
    );
  }
}

AddUser.propTypes = {
  onAddUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};

export default AddUser;
