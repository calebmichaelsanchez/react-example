module.exports = {
	path: 'experticity',

	getComponents (location, cb) {
		require.ensure([], (require) => {
			cb(null, { main: require('./components/Experticity') })
		})
	}
}