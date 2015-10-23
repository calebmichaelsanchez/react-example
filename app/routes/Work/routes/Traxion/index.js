module.exports = {
	path: 'traxion',

	getComponents (location, cb) {
		require.ensure([], (require) => {
			cb(null, require('./components/Traxion'));
		});
	}
};