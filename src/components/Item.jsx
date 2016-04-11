import React, { Component } from 'react';

export default class Item extends Component {

  addToCart(props) {


  }

  render(props) {
    return (
      <div>
      <div style={{fontSize:"30px"}} className="panel-heading">{this.props.name}</div>
        <div className="panel-body">
      <div>
        <img src={this.props.imageUrl}></img>
        Quantity:{this.props.quantity}
        <input style={{width:'10%'}}type='number' min='0' defaultValue='0'></input>
        <br></br>
        <ul>
          <li>Price: {this.props.price}</li>
          <li>Caffeine: {this.props.caffeine}</li>
          <li>Ingredients: {this.props.ingredients}</li>
          <li>Rating: {this.props.rating}</li>
          <li>Instock: {this.props.instock}</li>
          <li>Categories: {this.props.categories}</li>
        <button className="btn btn-md btn-warning">Add to Cart</button>
        </ul>
      </div>
    </div>
  </div>
    )
  }
}
