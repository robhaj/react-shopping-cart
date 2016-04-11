import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../app/actions/index';

import Checkout from './Checkout';
import Header from './Header'
import Menu from './Menu';

class App extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.props.fetchData();
  }

  render(props) {
    return (
      <div className='row'>
        <div className='col-md-12'>
          <Header />
        </div>
        <div className='col-md-8'>
          <Menu
            items={this.props.data.all}
             />
        </div>
        <div className='col-md-4'>
          <Checkout />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { data: state.data };
}

export default connect(mapStateToProps, { fetchData })(App);
