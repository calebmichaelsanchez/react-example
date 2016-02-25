import Nsac from './components/Nsac'

module.exports = {
  path: 'nsac',

  getComponent (location, cb) {
      cb(null, Nsac);
  }
}
