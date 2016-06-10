import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Form from '../shared/Form';
import Icon from '../../../shared/icons/Icon';

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.ga('send', 'pageview', '/all-ears');
    this.props.setNavTheme(this.props.theme);
  }
  render() {
    return (
      <DocumentTitle title="Contact | Underbelly Creative">
      <section className="contact">
          <Form />
          <section className="contact-info">
            <ul>
              <li className="contact-item contact-item-phone">
                <Icon icon="phone" />
                <a href="tel:8017700830">801.770.0830</a>
              </li><li className="contact-item contact-item-email">
                <Icon icon="computer" />
                <a href="mailto:hello@underbelly.is">hello@underbelly.is</a>
              </li><li className="contact-item contact-item-address">
                <Icon icon="building" />
                <a target="_blank" href="https://goo.gl/PE0ejO">378 W Broadway #3, Salt Lake City, UT 84101</a>
              </li>
            </ul>
          </section>
      </section>
      </DocumentTitle>
    );
  }
}

Contact.propTypes = {
  'theme': React.PropTypes.string.isRequired,
  'setNavTheme': React.PropTypes.func
};

Contact.defaultProps = {
  'theme': 'dark'
};

export default Contact;
