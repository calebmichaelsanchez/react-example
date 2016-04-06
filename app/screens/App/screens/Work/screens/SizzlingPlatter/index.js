import SizzlingPlatter from "./components/SizzlingPlatter";

module.exports = {
	path: 'sizzling-platter',

	getComponent (location, cb) {
		cb(null, RunItOnce);
	}
}
