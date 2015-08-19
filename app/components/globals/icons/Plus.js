import React from 'react';

class Plus extends React.Component {
	render(){
		return (
			<div className="icon-plus">
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill={this.props.color} d="M15.36 0v15.36H0v1.28h15.36V32h1.28V16.64H32v-1.28H16.64V0z"/></svg>
			</div>
		)
	}
};

export default Plus;