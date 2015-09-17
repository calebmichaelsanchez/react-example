module.exports = {
	path: 'just-family',

	getComponents (location, cb) {
		require.ensure([], (require) => {
			cb(null, { main: require('./components/JustFamily') })
		})
	}
}