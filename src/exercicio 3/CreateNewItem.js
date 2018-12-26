import React , {Component} from 'react';
import PropTypes from 'prop-types';

class CreateNewItem extends Component {
  state = {
    value: '',
  };

  changeValue = event => {
    this.setState({ value: event.target.value });
  };

  addItemState = event => {
    event.preventDefault();
    this.props.onAddItem(this.state.value);
    this.setState({ value: '' });
  };

  isEmpty = () => {
    return this.state.value === '';
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addItemState}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={this.state.value}
            onChange={this.changeValue}
          />
          <button disabled={this.isEmpty()}>Add</button>
        </form>
      </div>
    );
  }
}

CreateNewItem.propTypes = {
  onAddItem: PropTypes.func.isRequired,
};

export default CreateNewItem;
