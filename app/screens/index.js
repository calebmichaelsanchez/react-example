import App from "./App/components/App"
import Home from "./App/components/Home"


let myIndexRoute = {
  component: Home
}
let rootRoute = {
  path: '/',
  component: App,
  getIndexRoute(location, callback) {
    callback(null, myIndexRoute)
  },
  getChildRoutes(location, callback) {
    callback(null, [
      require("./App/screens/Contact"),
      require("./App/screens/Store"),
      require("./App/screens/Work")
    ])
  }
}

export default rootRoute
