import BrightBytes from './components/BrightBytes';

module.exports = {
  path: 'making-it-awesome-with/bright-bytes',

  getComponent (location, cb) {
    cb(null, BrightBytes);
  }
};
