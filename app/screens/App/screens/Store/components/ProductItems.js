import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import ProductItem from './ProductItem';

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
  renderProducts({name, preview_url, short_url, price, id}) {
    return (
      <ProductItem key={id} title={name} productLink={short_url} img={preview_url} price={price} />
    )
  }
  render() {
    let { products } = this.props;
    return (
      <DocumentTitle title="Store | Underbelly Creative">
        <div className="shop">
          <header className="shop-header">
            <span className="hero-lg">Shop</span>
          </header>
          <section className="products-container">
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
