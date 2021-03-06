import React, { Component } from 'react';
import { Link } from 'react-router';
import Icon from './icons/Icon';
import classNames from 'classnames';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'theme': this.props.theme,
      'open': false,
      'scrolled': false
    };
    this.handleNavigation = this.handleNavigation.bind(this);
    this.onScroll         = this.onScroll.bind(this);
    this.handleWidth      = this.handleWidth.bind(this);
    this.handleTheme      = this.handleTheme.bind(this);
    this.toggleOpen       = this.toggleOpen.bind(this);
    this.update           = this.update.bind(this);
  }
  componentDidMount() {
    this.lastKnownScroll = 0;
    this.ticking         = false;
    this.windowWidth = window.innerWidth || document.documentElement.clientWidth;
    this.requestAnimFrame = window.requestAnimationFrame && window.requestAnimationFrame.bind(window) ||
      window.webkitRequestAnimationFrame && window.webkitRequestAnimationFrame.bind(window) ||
      window.mozRequestAnimationFrame && window.mozRequestAnimationFrame.bind(window);
    window.addEventListener('scroll', this.onScroll, false);
    window.addEventListener('resize', this.handleWidth, false);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
    window.removeEventListener('resize', this.handleWidth, false);
  }
  handleWidth() {
    if (this.windowWidth >= 768 && this.state.open) {
      this.setState({ 'open': false });
    }
  }
  onScroll() {
    this.lastKnownScroll = window.pageYOffset;
    if (!this.ticking) {
      this.requestAnimFrame(this.update);
      this.ticking = true;
    }
  }
  onResize() {
    this.windowWidth = window.innerWidth || document.documentElement.clientWidth;
  }
  update() {
    let currentScrollPosition = this.lastKnownScroll;
    currentScrollPosition >= 40 ? this.setState({ 'scrolled': true }) : this.setState({ 'scrolled': false });
    this.ticking = false;
  }
  handleTheme() {
    if (this.props.theme === 'dark') {
      this.setState({ 'dark': true });
    } else if (this.props.theme === 'light') {
      this.setState({ 'light': true });
    }
  }
  toggleOpen(e) {
    e.preventDefault();
    this.setState({ 'open': !this.state.open });
  }
  handleNavigation() {
    if (this.state.open) {
      this.setState({ 'open': !this.state.open });
    }
  }
  render() {
    let classes = classNames({
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
}

Nav.propTypes = {
  'theme': React.PropTypes.string
};

export default Nav;
