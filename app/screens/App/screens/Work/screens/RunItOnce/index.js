import RunItOnce from "./components/RunItOnce";

module.exports = {
	path: 'run-it-once',

	getComponent (location, cb) {
		cb(null, RunItOnce);
	}
}
