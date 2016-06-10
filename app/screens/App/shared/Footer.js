import React from 'react';
import { Link } from 'react-router';
import Icon from './icons/Icon';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container-md">
          <div className="footer-logo">
            <Link to="/"><Icon icon="underbelly" /></Link>
          </div>
          <ul className="footer-social">
            <li className="social-item">
              <a href="https://twitter.com/underbelly" target="_blank"><Icon icon="twitter" /></a>
            </li>
            <li className="social-item">
              <a href="https://instagram.com/underbelly/" target="_blank"><Icon icon="instagram" /></a>
            </li>
            <li className="social-item">
              <a href="https://dribbble.com/underbelly" target="_blank"><Icon icon="dribbble" /></a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
