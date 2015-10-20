module.exports = {
	path: 'hive',

	getComponents (location, cb) {
		require.ensure([], (require) => {
			cb(null, require('./components/Hive'));
		});
	}
}