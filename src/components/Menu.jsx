import React, { Component } from 'react';
import Item from './Item';

export default class Menu extends Component {
  renderMenu() {
    return this.props.items.map((item) => {
      return (
          <div key={item._id} className="panel panel-default">
            <Item
              key={item._id}
              name={item.name}
              imageUrl={item.imageUrl}
              price={item.price}
              ingredients={item.ingredients}
              rating={item.rating}
              instock={item.instock}
              categories={item.categories}
            />
        </div>
        );
      });
    }

  render() {
    return (
      <div>
        Search by:
        <br></br>
        Category:
        <select>
          <option></option>
        </select>
        Name:
        <input type='text'/>
        Price:
        <input type='dropdown' />
        <div>
          {this.renderMenu()}
        </div>
      </div>
    );
  }
}
