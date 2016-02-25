import Aiga from './components/Aiga';

module.exports = {
	path: 'aiga',
	getComponent (location, cb) {
		cb(null, Aiga);
	}
};
