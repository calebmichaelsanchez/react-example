import Work from "./components/Work";

module.exports = {
	path: 'making-it-awesome',

	getChildRoutes (location, callback) {
		callback(null, [
			require('./screens/Aiga'),
			require('./screens/Bountiful'),
			require('./screens/Fluid'),
			require('./screens/Hive'),
			require('./screens/JustFamily'),
			require('./screens/Nsac'),
			require('./screens/RentTree'),
			require('./screens/Traxion'),
			require('./screens/RunItOnce'),
			require('./screens/SizzlingPlatter')
		])
	},

	getComponent (location, callback) {
			callback(null, Work);
	}
};
