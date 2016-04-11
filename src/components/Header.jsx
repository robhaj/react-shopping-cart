import React, { Component } from 'react';

const Header = (props) => {
  const style = {
    fontSize: '50px',
    color: 'orange'
  }
  return (
    <div>
      <span style={style}>Welcome to MERN Tea!</span>
      <br></br>
      <a href='#/'> Home </a> |
      <a href='#/about'> About </a> |
      <a href='#/contact'> Contact </a>
      <br></br>
    </div>
  );
}

export default Header
