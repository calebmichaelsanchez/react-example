import React from 'react';

class Airplane extends React.Component {
	render(){
		return (
			<div className="icon-airplane">
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill={this.props.color} d="M12.9 20.134L28.638 4.29l-11.31 24.752-4.426-8.908zm-9.838-4.83l24.53-11.77-15.598 15.703-8.932-3.932zm-3.06.05l11.65 5.13L17.376 32 31.997 0 .003 15.355z"/></svg>
			</div>
		)
	}
};

export default Airplane;