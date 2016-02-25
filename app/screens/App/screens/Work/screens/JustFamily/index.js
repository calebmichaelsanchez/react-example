import JustFamily from './components/JustFamily'

module.exports = {
	path: 'just-family',

	getComponent (location, cb) {
			cb(null, JustFamily);
	}
}
