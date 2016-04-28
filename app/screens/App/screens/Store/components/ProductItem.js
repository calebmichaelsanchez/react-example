import React, { Component } from 'react';
import Icon from '../../../shared/icons/Icon';

class ProductItem extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let { image, title, productLink, price } = this.props;
		let style = { backgroundImage: "url(" + image + ")" }
		return (
			<div className="product-item">
				<div className="product-image" style={style}></div>
				<div className="product-meta">
					<span className="product-title">{title}</span>
					<a href={productLink} target="_blank" className="product-btn">
						<span>{price}</span>
						<Icon icon="arrow" type="icon-btn" theme="dark" />
					</a>
				</div>
			</div>
		);
	}
}
ProductItem.propTypes = {
	title: React.PropTypes.string,
	productLink: React.PropTypes.string,
	img: React.PropTypes.string,
	price: React.PropTypes.string
}

export default ProductItem;
