import React, { Component } from 'react';

const Checkout = (props) => {
  return (
    <div>
      <h3>Total</h3>
      <h2>total</h2>
      <ul>
        <li>item x quantity = price</li>
      </ul>
        <a href="/checkout">
          <button className="btn btn-md btn-default">
            Checkout
            <span className="glyphicon glyphicon-shopping-cart"
                  aria-hidden="true">
            </span>
          </button>
        </a>
    </div>
  )
}

export default Checkout
