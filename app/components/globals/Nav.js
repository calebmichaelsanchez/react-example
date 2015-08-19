import React from 'react';
import Router from 'react-router';
import Plus from './icons/Plus';
import Monstro from './icons/Monstro';
import Airplane from './icons/Airplane';

var Link = Router.Link;

class Nav extends React.Component {
	render() {
		return (
				<nav>
					<ul className="nav-header">
						<li><a href="#"><Plus color="#ffffff" /></a>
			 </li><li><a href="#"><Monstro color="#ffffff" /></a>
			 </li><li><Link to="contact"><Airplane color="#ffffff" /></Link></li>
					</ul>
					<ul className="nav">
						<li className="nav-item">
							<Link to="/">Work</Link>
						</li>
						<li className="nav-item">
							<Link to="about">About</Link>
						</li>
						<li className="nav-item">
							<Link to="store">Store</Link>
						</li>
						<li className="nav-item">
							<a href="blog">Blog</a>
						</li>
						<li className="nav-item nav-item-contact">
							<Link to="contact">Contact</Link>
						</li>
					</ul>
				</nav>
		)
	}
};

export default Nav;