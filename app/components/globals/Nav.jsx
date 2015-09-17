import React, { Component } from 'react';
import Router, { Link } from 'react-router';
import Icon from './icons/Icon';
import classNames from 'classnames';

class Nav extends Component {
	constructor(props) {
		super(props);
		this.toggleOpen = this.toggleOpen.bind(this);
		this.handleNavigation = this.handleNavigation.bind(this);
		this.state = {
			dark: false,
			open: false,
			scrolled: false
		}
		this.handleScroll = this.handleScroll.bind(this);
	}
	componentDidMount() {
		this.handleScroll();
		window.addEventListener("scroll", this.handleScroll);
	}
	handleScroll() {
		var el = React.findDOMNode(this.refs.nav);
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
			'dark': this.state.dark,
			'scrolled': this.state.scrolled
		})
		return (
				<nav ref="nav" className={ classes }>
					<ul className="nav-header">
						<li><a href="#" onClick={this.toggleOpen}><Icon icon="plus" /></a></li>
						<li><Link onClick={this.handleNavigation} to="/"><Icon icon="monstro" /></Link></li>
						<li><Link onClick={this.handleNavigation} to="contact"><Icon icon="airplane" /></Link></li>
					</ul>
					<ul className="nav">
						<li className="nav-item">
							<Link onClick={this.handleNavigation} to="about" activeClassName="active">About</Link>
						</li>
						<li className="nav-item">
							<Link onClick={this.handleNavigation} to="store" activeClassName="active">Store</Link>
						</li>
						<li className="nav-item">
							<Link onClick={this.handleNavigation} to="work" activeClassName="active">Work</Link>
						</li>
						<li className="nav-item nav-item-contact">
							<Link onClick={this.handleNavigation} to="contact" activeClassName="active">Contact</Link>
						</li>
					</ul>
				</nav>
		)
	}
};

export default Nav;