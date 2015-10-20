module.exports = {
	path: 'aiga',

	getComponents (location, cb) {
		require.ensure([], (require) => {
			cb(null, require('./components/Aiga'));
		});
	}
};