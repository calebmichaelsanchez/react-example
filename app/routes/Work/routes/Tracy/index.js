module.exports = {
	path: 'tracy',

	getComponents (location, cb) {
		require.ensure([], (require) => {
			cb(null, { main: require('./components/Tracy') })
		})
	}
}