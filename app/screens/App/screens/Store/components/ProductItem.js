import React, { Component } from 'react';
import Icon from '../../../shared/icons/Icon';

class ProductItem extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="product-item">
				<img src={this.props.img} alt=""/>
				<div className="product-meta">
					<span className="product-title">{this.props.title}</span>
					<a href={this.props.productLink} target="_blank" className="product-btn">
						{this.props.price}
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
