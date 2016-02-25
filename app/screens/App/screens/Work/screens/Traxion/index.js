import Traxion from "./components/Traxion";

module.exports = {
	path: 'traxion',

	getComponent (location, cb) {
		cb(null, Traxion);
	}
};
