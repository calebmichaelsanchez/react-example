module.exports = {
	path: 'contact',

	getComponent(location, cb) {
		require.ensure([], (require) => {
			cb(null, require('./components/Contact'))
		})
	}
}