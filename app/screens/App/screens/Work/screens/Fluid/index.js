import Fluid from "./components/Fluid";

module.exports = {
	path: 'fluid',

	getComponent (location, cb) {
		cb(null, Fluid);
	}
}
