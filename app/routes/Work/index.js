module.exports = {
	path: '/work',

	getChildRoutes (location, cb) {
		require.ensure([], (require) => {
			cb(null, [
				require('./routes/Aiga'),
				require('./routes/BrightBytes'),
				require('./routes/Experticity'),
				require('./routes/Fluid'),
				require('./routes/Hive'),
				require('./routes/JustFamily'),
				require('./routes/RentTree'),
				require('./routes/Tracy'),
				require('./routes/Traxion')
			])
		})
	},

	getComponents (location, cb) {
		require.ensure([], (require) => {
			cb(null, require('./components/Work'));
		});
	}
};