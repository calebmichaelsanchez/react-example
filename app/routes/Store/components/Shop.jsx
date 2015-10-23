import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Icon from '../../../components/globals/icons/Icon';

let shopImg = {
	wireframes: require('../../../assets/img/shop/thumbs/wireframes.jpg'),
	iphone: require('../../../assets/img/shop/thumbs/iphone-5.png'),
	stickers: require('../../../assets/img/shop/thumbs/stickers.jpg'),
	icons: require('../../../assets/img/shop/thumbs/shifty-icons.jpg')
}

class Shop extends Component {
	constructor(props) {
		super(props);
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}
	componentDidMount() {
		this.props.setNavTheme(this.props.theme);
	}
	handleMouseEnter(event) {
		var btn = document.querySelectorAll('.product-btn');
		console.log(btn[0].children[0].innerHTML);
		btn[0].children[0].innerHTML = 'Buy';
	}
	handleMouseLeave(event) {
		var btn = document.querySelectorAll('.product-btn');
		console.log(btn[0].children[0].innerHTML);
		btn[0].children[0].innerHTML = 'Free';
	}
	render(){
		console.log(this);
		return (
			<DocumentTitle title="Store | Underbelly Creative">
			<div className="shop">
				<header className="shop-header">
					<span className="hero-lg">Shop</span>
				</header>
				<section className="products-container">
					<div className="product-item">
						<img src={shopImg.wireframes} alt=""/>
						<div className="product-meta">
							<span className="product-title">Wireframes Kit</span>
							<a href="https://plasso.co/s/eisi9Wny5b" target="_blank" className="product-btn">
								Free
								<Icon icon="arrow" type="icon-btn" theme="dark" />
							</a>
						</div>
					</div>
					<div className="product-item">
						<img src={shopImg.iphone} alt=""/>
						<div className="product-meta">
							<span className="product-title">iPhone 5 Templates</span>
							<a href="https://plasso.co/s/Hx2BAI4OGy" target="_blank" className="product-btn">
								Free
								<Icon icon="arrow" type="icon-btn" theme="dark" />
							</a>
						</div>
					</div>
					<div className="product-item">
						<img src={shopImg.stickers} alt=""/>
						<div className="product-meta">
							<span className="product-title">Underbelly Stickers</span>
							<a href="https://plasso.co/s/4caF09ZEg0" target="_blank" className="product-btn">
								$0.99
								<Icon icon="arrow" type="icon-btn" theme="dark" />
							</a>
						</div>
					</div>
				</section>
			</div>
			</DocumentTitle>
		)
	}
};
Shop.propTypes = {
	theme: React.PropTypes.string.isRequired,
	setNavTheme: React.PropTypes.func.isRequired
}
Shop.defaultProps = {
	theme: 'dark'
}
export default Shop;