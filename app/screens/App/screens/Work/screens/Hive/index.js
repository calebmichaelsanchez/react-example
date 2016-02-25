import Hive from "./components/Hive";

module.exports = {
	path: 'hive',

	getComponent (location, cb) {
			cb(null, Hive);
	}
}
