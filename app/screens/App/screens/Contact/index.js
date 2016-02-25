import Contact from "./components/Contact"

module.exports = {
	path: 'all-ears',
	getComponent(location, callback) {
		callback(null, Contact)
	}
}
