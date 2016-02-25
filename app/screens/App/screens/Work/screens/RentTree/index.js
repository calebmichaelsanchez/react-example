import RentTree from './components/RentTree';

module.exports = {
	path: 'rent-tree',

	getComponent (location, cb) {
		cb(null, RentTree);
	}
}
