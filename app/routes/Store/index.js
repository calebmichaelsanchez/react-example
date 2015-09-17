module.exports = {
	path: 'store',

	getComponent(location, cb) {
		require.ensure([], (require) => {
			cb(null, require('./components/Store'))
		})
	}
}