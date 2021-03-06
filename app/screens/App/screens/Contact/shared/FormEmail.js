let React = require('react');

let FormEmail = React.createClass({
  'propTypes': {
    'model': React.PropTypes.object.isRequired
  },

  render() {
    let model = this.props.model;

    return (
      <div>
        <h3>Name</h3><p>{model.name}</p>
        <h3>Email</h3><p>{model.email}</p>
        <h3>About</h3><p>{model.about}</p>
        <h3>Services</h3><p>{model.service}</p>
        <h3>Timing</h3><p>{model.timeline}</p>
        <h3>Budget</h3><p>{model.budget}</p>
      </div>
    );
  }
});

module.exports = FormEmail;
