import Bountiful from './components/Bountiful';

module.exports = {
  path: 'bountiful-dental',

  getComponent (location, cb) {
    cb(null, Bountiful);
  }
};
