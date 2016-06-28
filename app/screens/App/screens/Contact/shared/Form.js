import React, { Component } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import Icon from '../../../shared/icons/Icon';

let pick = function (o, ...fields) {
  return fields.reduce((a, x) => {
    if (o.hasOwnProperty(x)) {
      a[x] = o[x];
    }
    return a;
  }, {});
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'name': '',
      'email': '',
      'budget': '',
      'timeline': '',
      'service': '',
      'about': '',
      'open': false,
      'budgetOpen': false,
      'timelineOpen': false,
      'serviceOpen': false,
      'errors': {},
      'submitting': false,
      'success': false
    };
    this.handlePageClick  = this.handlePageClick.bind(this);
    this.getModel         = this.getModel.bind(this);
    this.handleSubmit     = this.handleSubmit.bind(this);
    this.alertClass       = this.alertClass.bind(this);
    this.validate         = this.validate.bind(this);
    this.send             = this.send.bind(this);
    this.error            = this.error.bind(this);
    this.handleTitleClick = this.handleTitleClick.bind(this);
    this.handleLabelClick = this.handleLabelClick.bind(this);
    this.handleUpdate     = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    window.addEventListener('mousedown', this.handlePageClick, false);
  }
  componentWillUnmount() {
    window.removeEventListener('mousedown', this.handlePageClick, false);
  }

  handlePageClick(event) {
    let el = event.target;
    let parent = el.parentNode.nodeName.toLowerCase();
    if (parent !== 'li') {
      this.setState({
        'budgetOpen': false,
        'timelineOpen': false,
        'serviceOpen': false
      });
    }
  }

  getModel() {
    let model = pick(this.state, 'name', 'email', 'service', 'timeline', 'budget', 'about');
    return model;
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.validate()) {
      window.ga('send', 'event', 'Form', 'Submit', 'Contact');
      this.send();
    }
  }

  alertClass(name) {
    return this.state.errors[name] ? 'alert' : '';
  }

  validate() {
    let errors = this.state.errors = {};
    let email = new RegExp('@');
    let valid = true;
    let model = this.getModel();

    ['name', 'email', 'about', 'budget', 'timeline', 'service'].map((field) => {
      if (!model[field]) {
        errors[field] = 'is required';
        valid = false;
      } else if (model[field].length > 10000) {
        errors[field] = 'is too long';
        valid = false;
      }
    });

    ['email'].map((field) => {
      if (!email.test(model[field])) {
        errors[field] = 'Not a valid email';
        valid = false;
      }
    });

    this.setState({ 'errors': errors});

    return valid;
  }

  send() {
    let model = this.getModel();

    this.setState({ 'submitting': true});
    axios.post('/contact-form', model)
      .then((res) => {
        if (res.data === 'sent') {
          this.setState({ 'success': true });
        }
      })
      .catch(() => {
        this.setState({ 'error': true });
      });
    this.setState({ 'submitting': false});
  }

  error(name) {
    if (this.state.errors[name]) {
      return <span className="error">{this.state.errors[name]}</span>;
    }
    return <span></span>;
  }
  handleLabelClick(event) {
    let name = event.currentTarget.name;
    let open = name + 'Open';
    this.setState({
      [name]: event.target.value,
      [open]: false
    });
  }
  handleTitleClick(event) {
    let name = event.target.dataset.name;
    let open = name + 'Open';
    let state = !this.state[open];
    this.setState({
      [open]: state
    });
  }
  handleUpdate(event) {
    let name = event.target.name;
    let state = event.target.value;
    this.setState({ [name]: state });
  }
  render() {
    const formClass = classNames({
      'submitting': this.state.submitting,
      'success': this.state.success
    });
    const budgetClass = classNames({
      'dropdown-open': this.state.budgetOpen,
      'chosen': this.state.budget === '' ? false : true
    });
    const timelineClass = classNames({
      'dropdown-open': this.state.timelineOpen,
      'chosen': this.state.timeline === '' ? false : true
    });
    const serviceClass = classNames({
      'dropdown-open': this.state.serviceOpen,
      'chosen': this.state.service === '' ? false : true
    });
    let img = { 'sending': 'https://s3.amazonaws.com/underbelly/website/contact/sending.png' };
    return (
      <div className="form-wrapper">
        <form ref="form" className={`form ${formClass}`} onSubmit={this.handleSubmit}>
          <div className="loading">
            <img src={img.sending} alt=""/>
          </div>
          <fieldset>
            <div className="fieldset-item">
              <label className="label" htmlFor="name">Hi, my name is</label>
              <div className="input">
                <input type="text" name="name" className={this.alertClass('name')} placeholder="your name" onChange={this.handleUpdate} />
              </div>
            </div>

            <div className="fieldset-item">
              <label className="label" htmlFor="email">My email address is</label>
              <div className="input">
                <input type="text" name="email" className={this.alertClass('email')} placeholder="your email" onChange={this.handleUpdate} />
              </div>
            </div>

            <div className="fieldset-item">
              <div className="fieldset-title">I'm contacting about</div>
              <div className="fieldset-group">
                <dl className={`dropdown ${serviceClass} ${this.alertClass('service')}`}>
                  <dt data-name="service" onClick={this.handleTitleClick}>{this.state.service ? this.state.service : 'select a type of project'}</dt>
                  <dd>
                    <ul>
                      <li>
                        <input type="radio" name="service" value="app design" id="app-design" onClick={this.handleLabelClick} />
                        <label htmlFor="app-design">app design</label>
                      </li>

                      <li>
                        <input type="radio" name="service" value="web design" id="web-design" onClick={this.handleLabelClick} />
                        <label htmlFor="web-design">web design</label>
                      </li>

                      <li>
                        <input type="radio" name="service" value="branding" id="branding" onClick={this.handleLabelClick} />
                        <label htmlFor="branding">branding</label>
                      </li>

                      <li>
                        <input type="radio" name="service" value="development" id="development" onClick={this.handleLabelClick} />
                        <label htmlFor="development">development</label>
                      </li>

                      <li>
                        <input type="radio" name="service" value="multiple services" id="multiple-services" onClick={this.handleLabelClick} />
                        <label htmlFor="multiple-services">multiple services</label>
                      </li>

                      <li>
                        <input type="radio" name="service" value="saying hello!" id="say-hello" onClick={this.handleLabelClick} />
                        <label htmlFor="say-hello">saying hello!</label>
                      </li>
                    </ul>
                  </dd>
                </dl>
              </div>
            </div>

            <div className="fieldset-item">
              <div className="fieldset-title">My timeline is</div>
              <div className="fieldset-group">
                <dl className={`dropdown ${timelineClass} ${this.alertClass('timeline')}`}>
                  <dt data-name="timeline" onClick={this.handleTitleClick}>{this.state.timeline ? this.state.timeline : 'select a timeline'}</dt>
                  <dd>
                    <ul>
                      <li>
                        <input type="radio" name="timeline" value="yesterday!" id="yesterday" onClick={this.handleLabelClick} />
                        <label htmlFor="yesterday">yesterday!</label>
                      </li>

                      <li>
                        <input type="radio" name="timeline" value="the next few months" id="few-months" onClick={this.handleLabelClick} />
                        <label htmlFor="few-months">next few months</label>
                      </li>

                      <li>
                        <input type="radio" name="timeline" value="this year" id="this-year" onClick={this.handleLabelClick} />
                        <label htmlFor="this-year">this year</label>
                      </li>
                    </ul>
                  </dd>
                </dl>
              </div>
            </div>

            <div className="fieldset-item">
              <div className="fieldset-title">I have a budget of</div>
              <div className="fieldset-group">
                <dl className={`dropdown ${budgetClass} ${this.alertClass('budget')}`}>
                  <dt data-name="budget" onClick={this.handleTitleClick}>{this.state.budget ? this.state.budget : 'select a budget'}</dt>
                  <dd>
                    <ul>
                      <li>
                        <input type="radio" name="budget" value="less than 25k" id="-25k" onClick={this.handleLabelClick} />
                        <label htmlFor="-25k">less than 25k</label>
                      </li>

                      <li>
                        <input type="radio" name="budget" value="25k - 50k" id="25k" onClick={this.handleLabelClick} />
                        <label htmlFor="25k">25k - 50k</label>
                      </li>

                      <li>
                        <input type="radio" name="budget" value="50k - 100k" id="50k" onClick={this.handleLabelClick} />
                        <label htmlFor="50k">50k - 100k</label>
                      </li>

                      <li>
                        <input type="radio" name="budget" value="+100k" id="+100k" onClick={this.handleLabelClick} />
                        <label htmlFor="+100k">+100k</label>
                      </li>
                      <li>
                        <input type="radio" name="budget" value="ongoing retainer" id="ongoing-retainer" onClick={this.handleLabelClick} />
                        <label htmlFor="ongoing-retainer">ongoing retainer</label>
                      </li>
                    </ul>
                  </dd>
                </dl>
              </div>
            </div>

            <div className="fieldset-item no-flex">
              <label htmlFor="about" className="label about">My project</label>
              <textarea name="about" className={this.alertClass('about')} placeholder="tell us about your project. . ." onChange={this.handleUpdate} ref="about"></textarea>
            </div>

            <button className="submit" type="submit" disabled={this.state.submitting} >Send your message <Icon icon="airplane" /></button>
          </fieldset>
        </form>
        <div className="sent-container">
          <div className="sent-check">
              <Icon icon="checkmark" />
          </div>
          <div className="sent-message">Sent!</div>
          <div className="facebook-container circle-item">
            <Icon icon="facebook" />
            <div className="facebook-item share-item">
              <div className="fb-like" data-href="https://www.facebook.com/UnderbellyCreative" data-layout="button" data-action="like" data-show-faces="false" data-share="false"></div>
            </div>
          </div>
          <div className="twitter-container circle-item">
            <Icon icon="twitter" theme="light" />
            <div className="twitter-item share-item">
              <a href="https://twitter.com/underbelly" className="twitter-follow-button" data-show-count="false" data-show-screen-name="false">Follow @underbelly</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
