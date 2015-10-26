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
		this.handleScroll = this.handleScroll.bind(this);
		this.handleWidth = this.debounce(this.handleWidth.bind(this), 250);
		this.handleTheme = this.handleTheme.bind(this);
		this.toggleOpen = this.toggleOpen.bind(this);
	}
	componentDidMount() {
		this.setState({theme: this.props.theme});
		var self = this;
		window.requestAnimationFrame = window.requestAnimationFrame
		 || window.mozRequestAnimationFrame
		 || window.webkitRequestAnimationFrame
		 || window.msRequestAnimationFrame
		//window.addEventListener("scroll", function() {requestAnimationFrame(self.handleScroll)}, false);
		window.addEventListener("scroll", this.handleScroll);
		window.addEventListener("resize", this.handleWidth);
	}
	debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	}
	handleWidth() {
		var el = findDOMNode(this.refs.nav);
		var w = window.innerWidth;
		if (w >= 768 && this.state.open) {
			this.setState({
				open: false
			});
		}
	}
	handleScroll() {
		var el = findDOMNode(this.refs.nav);
		var offset = window.scrollY;
		if (offset >= 40) {
			this.setState({
				scrolled: true
			});
		} else {
			this.setState({
				scrolled: false
			})
		}
	}
	handleTheme() {
		if(this.props.theme === "dark") {
			this.setState({
				dark: true
			});
		} else if (this.props.theme === "light") {
			this.setState({
				light: true
			});
		}
	}
	toggleOpen(e) {
		e.preventDefault();
		this.setState({
			open: !this.state.open
		});
	}
	handleNavigation() {
		if (this.state.open) {
			this.setState({
				open: !this.state.open
			});
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
					<li><Link onClick={this.handleNavigation} to="/contact"><Icon icon="airplane" /></Link></li>
				</ul>
				<ul className="nav-menu">
					<li className="nav-item">
						<Link onClick={this.handleNavigation} to="/work" activeClassName="active">Work</Link>
					</li>
					<li className="nav-item">
						<a onClick={this.handleNavigation} href="http://blog.underbelly.is">Journal</a>
					</li>
					<li className="nav-item">
						<Link onClick={this.handleNavigation} to="/store" activeClassName="active">Shop</Link>
					</li>
					<li className="nav-item nav-item-contact">
						<Link onClick={this.handleNavigation} to="/contact" activeClassName="active">Contact</Link>
						<Link onClick={this.handleNavigation} to="/contact"><Icon icon="airplane" /></Link>
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