module.exports = {
	path: 'tracy',

	getComponents (location, cb) {
		require.ensure([], (require) => {
			cb(null, require('./components/Tracy'));
		});
	}
}