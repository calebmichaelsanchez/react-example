import React, { Component } from 'react';
import axios from 'axios';
import ProductItems from './ProductItems';
import Products from '../data/products';

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'products': [],
      'productsLoaded': false
    };
    this.handleGetProducts = this.handleGetProducts.bind(this);
  }
  componentDidMount() {
    window.ga('send', 'pageview', '/peddling');
    window.scrollTo(0, 0);
    this.props.setNavTheme(this.props.theme);
    this.handleGetProducts();
  }
  handleGetProducts() {
    axios.post('/products')
      .then((response) => {
        this.setState({
          'products': response.data.products,
          'productsLoaded': true
        });
      })
      .catch(() => {
        this.setState({
          'products': Products,
          'productsLoaded': true
        });
      });
  }
  render() {
    return (
      <ProductItems {...this.state} />
    );
  }
}

Store.propTypes = {
  'theme': React.PropTypes.string.isRequired,
  'setNavTheme': React.PropTypes.func
};

Store.defaultProps = {
  'theme': 'dark'
};

export default Store;
