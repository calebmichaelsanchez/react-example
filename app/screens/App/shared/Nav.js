import React, { Component } from 'react';
import ReactDom, { findDOMNode } from 'react-dom';
import Router, { Link } from 'react-router';
import Icon from './icons/Icon';
import classNames from 'classnames';

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			theme: "",
			open: false,
			scrolled: false
		}
		this.handleNavigation = this.handleNavigation.bind(this);
		this.onScroll         = this.onScroll.bind(this);
		this.handleWidth      = this.handleWidth.bind(this);
		this.handleTheme      = this.handleTheme.bind(this);
		this.toggleOpen       = this.toggleOpen.bind(this);
		this.update           = this.update.bind(this);
		this.requestTick			= this.requestTick.bind(this);
	}
	componentDidMount() {
		this.lastKnownScroll = 0;
		this.ticking 				 = false;
		this.setState({theme: this.props.theme});
		window.addEventListener("scroll", this.onScroll), false;
		window.addEventListener("resize", this.handleWidth, false);
	}
	componentWillUnmount() {
		window.removeEventListener("scroll", this.onScroll, false);
		window.removeEventListener("resize", this.handleWidth, false);
	}
	handleWidth() {
		let w  = window.innerWidth;
		if (w >= 768 && this.state.open) {
			this.setState({
				open: false
			});
		}
	}
	onScroll() {
		this.lastKnownScroll = window.pageYOffset;
		this.requestTick();
	}
	requestTick() {
		if(!this.ticking) {
			window.requestAnimFrame(this.update);
			this.ticking = true;
		}
	}
	update() {
		let currentScrollPosition = this.lastKnownScroll;
		currentScrollPosition >= 40 ? this.setState({ scrolled: true }) : this.setState({ scrolled: false });
		this.ticking = false;
	}
	handleTheme() {
		if(this.props.theme === "dark") {
			this.setState({ dark: true });
		} else if (this.props.theme === "light") {
			this.setState({ light: true });
		}
	}
	toggleOpen(e) {
		e.preventDefault();
		this.setState({ open: !this.state.open });
	}
	handleNavigation() {
		if (this.state.open) {
			this.setState({ open: !this.state.open });
		}
	}
	render() {
		var classes = classNames({
			'open': this.state.open,
			'scrolled': this.state.scrolled
		});
		return (
			<nav ref="nav" className={ `${classes} ${this.props.theme}` }>
				<ul className="nav-header">
					<li><a href="#" className="toggle" onClick={this.toggleOpen}><div className="burger"></div></a></li>
					<li><Link onClick={this.handleNavigation} to="/"><Icon icon="monstro" /></Link></li>
					<li><Link onClick={this.handleNavigation} to="/all-ears"><Icon icon="airplane" /></Link></li>
				</ul>
				<ul className="nav-menu">
					<li className="nav-item">
						<Link onClick={this.handleNavigation} to="/making-it-awesome" activeClassName="active">Work</Link>
					</li>
					<li className="nav-item">
						<a onClick={this.handleNavigation} href="http://blog.underbelly.is">Journal</a>
					</li>
					<li className="nav-item">
						<Link onClick={this.handleNavigation} to="/peddling" activeClassName="active">Shop</Link>
					</li>
					<li className="nav-item nav-item-contact">
						<Link onClick={this.handleNavigation} to="/all-ears" activeClassName="active">Contact</Link>
						<Link onClick={this.handleNavigation} to="/all-ears"><Icon icon="airplane" /></Link>
					</li>
				</ul>
			</nav>
		);
	}
};
Nav.propTypes = {
	theme: React.PropTypes.string
}

export default Nav;
