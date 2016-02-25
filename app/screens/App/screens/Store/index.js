import Store from "./components/Store"

module.exports = {
	path: 'peddling',
	getComponent(location, callback) {
			callback(null, Store)
	}
}
