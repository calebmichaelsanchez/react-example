import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import ProductItem from './ProductItem';
import Icon from '../../../components/globals/icons/Icon';

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
		btn[0].children[0].innerHTML = 'Buy';
	}
	handleMouseLeave(event) {
		var btn = document.querySelectorAll('.product-btn');
		btn[0].children[0].innerHTML = 'Free';
	}
	render(){
		let img = {
			classicUnderbellyStickers: require("../../../assets/img/shop/classic-underbelly-stickers/classic-underbelly-sticker.jpg"),
			explorerFloorMat: require("../../../assets/img/shop/explorer-floor-mat/Explorer-Floor-Mat.jpg"),
			iPhone5Template: require("../../../assets/img/shop/iPhone-5-template/iphone-5.png"),
			iPhone5cBlueMarket: require("../../../assets/img/shop/iPhone-5c-blue-market/Market-iPhone-5C-Blue.jpg"),
			iPhone5cBlueMetro: require("../../../assets/img/shop/iPhone-5c-blue-metro/Metro-iPhone-5C-Blue.jpg"),
			iPhone5cWhiteMetro: require("../../../assets/img/shop/iPhone-5c-white-metro/Metro-iPhone-5C-White.jpg"),
			iPhone5sBlackCafe: require("../../../assets/img/shop/iPhone-5s-black-cafe/CAFE-iPhone-5S-Black.jpg"),
			iPhone5sBlackMarket: require("../../../assets/img/shop/iPhone-5s-black-market/MARKET-iPhone-5S-Black.jpg"),
			iPhone5sBlackMetroAngled: require("../../../assets/img/shop/iPhone-5s-black-metro-angled/Metro-Angled-iPhone-5S-Black.jpg"),
			iPhone5sBlackWood: require("../../../assets/img/shop/iPhone-5s-black-wood/Wood-iPhone-5S-Black.jpg"),
			iPhone5sGoldCafe: require("../../../assets/img/shop/iPhone-5s-gold-cafe/CAFE-iPhone-5S-Gold.jpg"),
			iPhone6LandscapeWhite: require("../../../assets/img/shop/iPhone-6-landscape-white/iPhone-6-Landscape-White.jpg"),
			iPhone6TiltedWhite: require("../../../assets/img/shop/iPhone-6-tilted-white/iPhone-6-Tilted-White.jpg"),
			mcflySticker: require("../../../assets/img/shop/mcfly-sticker/mcfly-sticker.jpg"),
			pips: require("../../../assets/img/shop/pips/pips.jpg"),
			shiftyIcons: require("../../../assets/img/shop/shifty-icons/shifty-icons.jpg"),
			slimlineWallet: require("../../../assets/img/shop/slimline-wallet/slimline-wallet-1.jpg"),
			stickerBundle: require("../../../assets/img/shop/sticker-bundle/underbelly-Stickers.jpg"),
			wireframesKit: require("../../../assets/img/shop/wireframes-kit/wireframes.jpg")
		}
		return (
			<DocumentTitle title="Store | Underbelly Creative">
			<div className="shop">
				<header className="shop-header">
					<span className="hero-lg">Shop</span>
				</header>
				<section className="products-container">
					<ProductItem title="McFly Underbelly Sticker" img={img.mcflySticker} productLink="https://gumroad.com/l/pHBc" price="$0.99" />
					<ProductItem title="Bag of comical mystery stickers!" img={img.stickerBundle} productLink="https://gumroad.com/l/maghg" price="$1.99" />
					<ProductItem title="iPhone 5S Black Wood" img={img.iPhone5sBlackWood} productLink="https://gumroad.com/l/bALov" price="$0.99" />
					<ProductItem title="iPhone 5C White Metro" img={img.iPhone5cWhiteMetro} productLink="https://gumroad.com/l/NPrA" price="$0.99" />
					<ProductItem title="iPhone 5C Blue Metro" img={img.iPhone5cBlueMetro} productLink="https://gumroad.com/l/OBCo" price="$0.99" />
					<ProductItem title="iPhone 5S Black Metro Angled" img={img.iPhone5sBlackMetroAngled} productLink="https://gumroad.com/l/lXKWX" price="$0.99" />
					<ProductItem title="iPhone 5S Black Market" img={img.iPhone5sBlackMarket} productLink="https://gumroad.com/l/yFMc" price="$0.99" />
					<ProductItem title="iPhone 5C Blue Market" img={img.iPhone5cBlueMarket} productLink="https://gumroad.com/l/NJVnk" price="$0.99" />
					<ProductItem title="iPhone 5S Gold Cafe" img={img.iPhone5sGoldCafe} productLink="https://gumroad.com/l/UWyC" price="$0.99" />
					<ProductItem title="iPhone 5S Black Cafe" img={img.iPhone5sBlackCafe} productLink="https://gumroad.com/l/naLtc" price="$0.99" />
					<ProductItem title="Explorer Floor Mat" img={img.explorerFloorMat} productLink="https://gumroad.com/l/laPEl" price="$250" />
					<ProductItem title="iPhone 6 Tilted White" img={img.iPhone6TiltedWhite} productLink="https://gumroad.com/l/aJehz" price="$0.99" />
					<ProductItem title="iPhone 6 Landscape White" img={img.iPhone6LandscapeWhite} productLink="https://gumroad.com/l/xiNhU" price="$0.99" />
					<ProductItem title="Slimline Wallet" img={img.slimlineWallet} productLink="https://gumroad.com/l/eauf" price="$48" />
					<ProductItem title="Classic Underbelly Stickers" img={img.classicUnderbellyStickers} productLink="https://gumroad.com/l/MEyjA" price="$0.99" />
					<ProductItem title="Pips" img={img.pips} productLink="https://gumroad.com/l/lown" price="Free" />
					<ProductItem title="Wireframes Kit" img={img.wireframesKit} productLink="https://gumroad.com/l/ySTNz" price="Free" />
					<ProductItem title="Shifty Icons" img={img.shiftyIcons} productLink="https://gumroad.com/l/AxcPB" price="$0.99" />
					<ProductItem title="iPhone 5 Template" img={img.iPhone5Template} productLink="https://gumroad.com/l/xksfW" price="Free" />
				</section>
			</div>
			</DocumentTitle>
		)
	}
};
Shop.propTypes = {
	theme: React.PropTypes.string.isRequired,
	setNavTheme: React.PropTypes.func
}
Shop.defaultProps = {
	theme: 'dark'
}
export default Shop;