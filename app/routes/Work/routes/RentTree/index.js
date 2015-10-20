module.exports = {
	path: 'rent-tree',

	getComponents (location, cb) {
		require.ensure([], (require) => {
			cb(null, require('./components/RentTree'));
		});
	}
}