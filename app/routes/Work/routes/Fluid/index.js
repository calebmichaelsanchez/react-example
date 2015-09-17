module.exports = {
	path: 'fluid',

	getComponents (location, cb) {
		require.ensure([], (require) => {
			cb(null, { main: require('./components/Fluid') })
		})
	}
}