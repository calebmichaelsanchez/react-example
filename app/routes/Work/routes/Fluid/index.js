module.exports = {
	path: 'fluid',

	getComponents (location, cb) {
		require.ensure([], (require) => {
			cb(null, require('./components/Fluid'));
		});
	}
}