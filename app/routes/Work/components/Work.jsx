import React, { Component } from 'react/addons';
import Projects from './Projects';

class Work extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		//let { children } = this.props;
		//let children = React.cloneElement(this.props.children, { setNavTheme: this.setNavTheme });
		let children = React.Children.map(this.props.children, (child) => {
			console.log(React.cloneElement(child, {setNavTheme: this.props.setNavTheme}));
			console.log(React.addons.createFragment(React.cloneElement(child, {setNavTheme: this.props.setNavTheme})));
			return React.addons.createFragment(React.cloneElement(child, {setNavTheme: this.props.setNavTheme}));
		});
		return (
			<section className="work">
				{ children ? ( {children} ) : ( <Projects setNavTheme={this.props.setNavTheme} /> ) }
			</section>
		);
	}
}
export default Work;