module.exports = {
	path: 'rent-tree',

	getComponents (location, cb) {
		require.ensure([], (require) => {
			cb(null, { main: require('./components/RentTree') })
		})
	}
}