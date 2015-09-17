import React, { Component } from 'react';
import Router, { Link } from 'react-router';
import Icon from './icons/Icon';

class Nav extends Component {
	constructor(props) {
		super(props);
		this.toggleOpen = this.toggleOpen.bind(this);
		this.handleNavigation = this.handleNavigation.bind(this);
		this.state = {
			dark: false,
			open: false
		}
		this.handleScroll = this.handleScroll.bind(this);
		handleScroll();
	}
	handleScroll() {
		var nav = React.findDOMNode('nav');
		console.log(nav);
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
		return (
				<nav className={ this.state.open ? 'open' : ''}>
					<ul className="nav-header">
						<li><a href="#" onClick={this.toggleOpen}><Icon icon="plus" /></a></li>
						<li><Link onClick={this.handleNavigation} to="/"><Icon icon="monstro" /></Link></li>
						<li><Link onClick={this.handleNavigation} to="contact"><Icon icon="airplane" /></Link></li>
					</ul>
					<ul className="nav">
						<li className="nav-item">
							<Link onClick={this.handleNavigation} to="/about" activeClassName="active">About</Link>
						</li>
						<li className="nav-item">
							<Link onClick={this.handleNavigation} to="store" activeClassName="active">Store</Link>
						</li>
						<li className="nav-item">
							<a href="blog">Blog</a>
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