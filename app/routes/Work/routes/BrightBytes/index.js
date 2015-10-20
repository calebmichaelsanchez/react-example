module.exports = {
	path: 'bright-bytes',

	getComponents (location, cb) {
		require.ensure([], (require) => {
			cb(null, require('./components/BrightBytes'));
		});
	}
}