import React from 'react/addons';
import axios from 'axios';
import classNames from 'classnames';
import Icon from '../globals/icons/Icon';

let pick = function (o, ...fields) {
    return fields.reduce((a, x) => {
        if(o.hasOwnProperty(x)) a[x] = o[x];
        return a;
    }, {});
}

let gatherTruthy = function () {
	let keys = Array.prototype.slice.call(arguments);
	let result = [];

	let obj = keys.shift();

	keys.map((key) => {
		if (obj[key] && result.indexOf(key) === -1) {
			result.push(key);
		}
	});
	return result;
}

const Form = React.createClass ({
	mixins: [React.addons.LinkedStateMixin],

	getInitialState: function () {
		return {
			name: "",
			email: "",
			budget: "",
			timeline: "",
			service: "",
			about: "",
			open: false,
			budgetOpen: false,
			timelineOpen: false,
			serviceOpen: false,
			errors: {},
			submitting: false
		};
	},

	componentDidMount: function() {
		window.addEventListener('mousedown', this.handlePageClick, false);
	},

	handlePageClick: function (event) {
		let el = event.target;
		let parent = el.parentNode.nodeName.toLowerCase();
		if (parent != 'li') {
			this.setState({
				budgetOpen: false,
				timelineOpen: false,
				serviceOpen: false,
			});
		}
	},

	getModel: function () {
		var model = pick(this.state, "name", "email", "service", "timeline", "budget", "about");
		//model.services = gatherTruthy(this.state, "design", "mobile", "webapp", "website", "cms");
		//model.timing = gatherTruthy(this.state, "today", "quarter", "year", "yesterday");
		//model.budget = gatherTruthy(this.state, "25k", "50k", "100k", "unsure");

		return model;
	},

	handleSubmit: function (event) {
		event.preventDefault();

		if (this.validate()) {
			this.send();
		}
	},

	alertClass: function (name) {
		return this.state.errors[name] ? "alert" : "";
	},

	validate: function() {
		let errors = this.state.errors = {},
				email = new RegExp("@"),
				valid = true,
				model = this.getModel();
		console.log(model);

		["name", "email", "about", "budget", "timeline", "service"].map( (field) => {
				if (!model[field]) {
					errors[field] = "is required";
					valid = false;
				} else if (model[field].length > 10000) {
					errors[field] = "is too long";
					valid = false;
				}
 		});

		["email"].map( (field) => {
		  if (!email.test(model[field])) {
				errors[field] = "Not a valid email"
				valid = false
			}
		});

		this.setState({ errors: errors});

		return valid;
	},

	send: function () {
		let model = this.getModel();
		alert(JSON.stringify(model));
		// let to = "hello@underbelly.is";
		// let subject = "Work with us";

		// this.setState({ submitting: true});
		// this.setState({ submitting: false});
	},

	error: function (name) {
		if (this.state.errors[name]) {
			return (<span className="error">{this.state.errors[name]}</span>);
		}
	},
	handleLabelClick: function (event) {
		let name = event.currentTarget.name;
		let open = name + "Open";
		this.setState({
			[name]: event.target.value,
			[open]: false
		});
	},
	handleTitleClick: function (event) {
		let name = event.target.dataset.name;
		let open = name + "Open";
		let state = !this.state[open];
		this.setState({
			[open]: state
		});
	},
	render: function () {
		const budgetClass = classNames({
			'dropdown-open': this.state.budgetOpen,
			'chosen': this.state.budget === "" ? false : true
		});
		const timelineClass = classNames({
			'dropdown-open': this.state.timelineOpen,
			'chosen': this.state.timeline === "" ? false : true
		});
		const serviceClass = classNames({
			'dropdown-open': this.state.serviceOpen,
			'chosen': this.state.service === "" ? false : true
		});
		return (
			<form className="form-wrapper" onSubmit={this.handleSubmit}>
				<fieldset>

					<div className="fieldset-item">
						<label className="label" htmlFor="name">Hi, my name is</label>
						<div className="input">
							<input type="text" name="name" className={this.alertClass("name")} placeholder="your name" valueLink={this.linkState("name")} />
						</div>
					</div>

					<div className="fieldset-item">
						<label className="label" htmlFor="email">My email address is</label>
						<div className="input">
							<input type="text" name="email" className={this.alertClass("email")} placeholder="your email" valueLink={this.linkState("email")} />
						</div>
					</div>

					<div className="fieldset-item">
						<div className="fieldset-title">I'm contacting about</div>
						<div className="fieldset-group">
							<dl className={`dropdown ${serviceClass} ${this.alertClass("service")}`}>
								<dt data-name="service" onClick={this.handleTitleClick}>{this.state.service ? this.state.service : "select a type of project"}</dt>
								<dd>
									<ul>
										<li>
											<input type="radio" name="service" value="Mobile Application" id="mobile" onClick={this.handleLabelClick} />
											<label htmlFor="mobile">Mobile Application</label>
										</li>

										<li>
											<input type="radio" name="service" value="Web Application" id="webapp" onClick={this.handleLabelClick} />
											<label htmlFor="webapp">Web Application</label>
										</li>

										<li>
											<input type="radio" name="service" value="Website" id="website" onClick={this.handleLabelClick} />
											<label htmlFor="website">Website</label>
										</li>

										<li>
											<input type="radio" name="service" value="Content Management System" id="cms" onClick={this.handleLabelClick} />
											<label htmlFor="cms">Content Management System</label>
										</li>
									</ul>
								</dd>
							</dl>
						</div>
					</div>

					<div className="fieldset-item">
						<div className="fieldset-title">My timeline is</div>
						<div className="fieldset-group">
							<dl className={`dropdown ${timelineClass} ${this.alertClass("timeline")}`}>
								<dt data-name="timeline" onClick={this.handleTitleClick}>{this.state.timeline ? this.state.timeline : "select a timeline"}</dt>
								<dd>
									<ul>
										<li>
											<input type="radio" name="timeline" value="¡yesterday!" id="yesterday" onClick={this.handleLabelClick} />
											<label htmlFor="yesterday">¡yesterday!</label>
										</li>

										<li>
											<input type="radio" name="timeline" value="the next few months" id="quarter" onClick={this.handleLabelClick} />
											<label htmlFor="quarter">the next few months</label>
										</li>

										<li>
											<input type="radio" name="timeline" value="ongoing sprints" id="ongoing" onClick={this.handleLabelClick} />
											<label htmlFor="ongoing">ongoing sprints</label>
										</li>
									</ul>
								</dd>
							</dl>
						</div>
					</div>

					<div className="fieldset-item">
						<div className="fieldset-title">I have a budget of</div>
						<div className="fieldset-group">
							<dl className={`dropdown ${budgetClass} ${this.alertClass("budget")}`}>
								<dt data-name="budget" onClick={this.handleTitleClick}>{this.state.budget ? this.state.budget : "select a budget"}</dt>
								<dd>
									<ul>
										<li>
											<input type="radio" name="budget" value="25k - 50k" id="25k" onClick={this.handleLabelClick} />
											<label htmlFor="25k">25k - 50k</label>
										</li>

										<li>
											<input type="radio" name="budget" value="50k - 100k" id="50k" onClick={this.handleLabelClick} />
											<label htmlFor="50k">50k - 100k</label>
										</li>

										<li>
											<input type="radio" name="budget" value="+100k" id="100k" onClick={this.handleLabelClick} />
											<label htmlFor="100k">+100k</label>
										</li>

										<li>
											<input type="radio" name="budget" value="Unsure" id="unsure" onClick={this.handleLabelClick} />
											<label htmlFor="unsure">Unsure</label>
										</li>
									</ul>
								</dd>
							</dl>
						</div>
					</div>

					<div className="fieldset-item no-flex">
						<label htmlFor="about" className="label about">My project</label>
						<textarea name="about" className={this.alertClass("about")} placeholder="tell us about your project. . ." valueLink={this.linkState("about")} ref="about"></textarea>
					</div>

					<button className="submit" type="submit">Send your message <Icon icon="airplane" /></button>
				</fieldset>
			</form>
		);
	}
});

export default Form;