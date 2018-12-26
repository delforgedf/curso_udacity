import React from 'react';
// import logo from '../logo.svg';
// import '../App.css';
import CreateNewItem from './CreateNewItem';
import ItemList from './ItemList';
import DeleteLastItem from './DeleteLastItem';

class App extends React.Component {
  state = {
    items: [],
  };

  addItem = item => {
    this.setState( prevState => ({items: [...prevState.items , item]}));
  }

  deleteItem = event => {
    this.setState(prevState=> ({items : this.state.items.slice(0 ,-1)}))
  }

  noHaveItem = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <CreateNewItem onAddItem={this.addItem} />
        <DeleteLastItem
          onDeleteLastItem={this.deleteItem}
          buttonDisabled={this.noHaveItem()}
        />
        <ItemList items={this.state.items} />
      </div>
    );
  }
}

export default App;
