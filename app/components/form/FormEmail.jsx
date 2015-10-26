import React from 'react';

const FormEmail = React.createClass ({
  render() {
    var model = this.props.model;

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

export default FormEmail;