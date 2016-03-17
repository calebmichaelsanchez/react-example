module.exports = {
	path: 'experticity',

	getComponents (location, cb) {
		require.ensure([], (require) => {
			cb(null, require('./components/Experticity'));
		});
	}
}