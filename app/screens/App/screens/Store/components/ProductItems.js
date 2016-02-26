import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import ProductItem from './ProductItem';
import classNames from 'classnames';

class ProductItems extends Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
    console.log(this.props);
  }
  filterProducts(product) {
    if (!product.published) {
      return;
    } else {
      return product;
    }
  }
  renderProducts({name, preview_url, short_url, formatted_price, id}) {
    return (
      <ProductItem key={id} title={name} productLink={short_url} image={preview_url} price={formatted_price} />
    )
  }
  render() {
    let { products } = this.props;
    let classes = classNames({ 'active': this.props.productsLoaded });
    return (
      <DocumentTitle title="Store | Underbelly Creative">
        <div className="shop">
          <header className="shop-header">
            <span className="hero-lg">Shop</span>
          </header>
          <section className={`products-container ${classes}`}>
            {products ? products.filter(this.filterProducts).map(this.renderProducts) : "Check back soon for more products!"}
          </section>
        </div>
      </DocumentTitle>
    );
  }
}
ProductItems.propTypes = {
  products: React.PropTypes.array
}

export default ProductItems;
