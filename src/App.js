import React, { Component } from 'react';

import AddItemForm from './components/AddItemForm/AddItemForm';
import Filter from './components/Filter/Filter';
import ItemList from './components/ItemList/ItemList';
import ItemsCount from './components/ItemsCount/ItemsCount';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: ['Shppoing', 'Lunch', 'Sleep']
    };

    this.addItemHandler = this.addItemHandler.bind(this);
  }

  addItemHandler(item) {
    this.setState(prevState => {
      const { items } = prevState;

      return {
        items: [...items, item]
      };
    });
  }

  removeItemHandler(item) {
    this.setState(prevState => {
      const { items } = prevState;

      if (items.indexOf(item) === -1) return;

      let newItems = items.splice(items.indexOf(item), 1);

      return {
        items: newItems
      };
    });
  }

  render() {
    return (
      <div className='App'>
        <h1>Todo List</h1>
        <hr />
        <AddItemForm onAdd={this.addItemHandler} />
        <hr />
        <Filter />
        <ItemsCount items={this.state.items} />
        <ItemList items={this.state.items} onRemove={this.removeItemHandler} />
      </div>
    );
  }
}

export default App;
