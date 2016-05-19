// data
// * separate image concerns out of the component *
//   lets store an img object that the whole component can access
let img = {
  hero: {
    one   : require("../../../../../../../images/work/sizzling-platter/hero/hero-screen-front.png"),
    two   : require("../../../../../../../images/work/sizzling-platter/hero/hero-screen-left.png"),
    three : require("../../../../../../../images/work/sizzling-platter/hero/hero-screen-right.png")
  },
  patterns: {
    swatches   : require("../../../../../../../images/work/sizzling-platter/patterns/swatches.png"),
    peppers    : require("../../../../../../../images/work/sizzling-platter/patterns/peppers.png"),
    pepperonis : require("../../../../../../../images/work/sizzling-platter/patterns/pepperonis.png"),
    sprinkles  : require("../../../../../../../images/work/sizzling-platter/patterns/sprinkles.png")
  },
  ingredients: {
    bg    : require("../../../../../../../images/work/sizzling-platter/ingredients/bg.png"),
    crsl  : require("../../../../../../../images/work/sizzling-platter/ingredients/carousel.png"),
    one   : require("../../../../../../../images/work/sizzling-platter/ingredients/01_sm.png"),
    two   : require("../../../../../../../images/work/sizzling-platter/ingredients/02_sm.png"),
    three : require("../../../../../../../images/work/sizzling-platter/ingredients/03_sm.png"),
    four  : require("../../../../../../../images/work/sizzling-platter/ingredients/04_sm.png")
  },
  designDev : {
    bgLeft  : require("../../../../../../../images/work/sizzling-platter/design-dev/design-dev-bg-left.png"),
    bgRight : require("../../../../../../../images/work/sizzling-platter/design-dev/design-dev-bg-right.png"),
    backgroundImagesArray: [
      "https://s3.amazonaws.com/underbelly/playground/01-executive-profile-small.jpg",
      "https://s3.amazonaws.com/underbelly/playground/02-brands-page-small.jpg",
      "https://s3.amazonaws.com/underbelly/playground/03-brand-page-small.jpg",
      "https://s3.amazonaws.com/underbelly/playground/04-home-scrolled-small.jpg",
      "https://s3.amazonaws.com/underbelly/playground/05-home-small.jpg"
    ],
    screenImagesArray: [
      "https://s3.amazonaws.com/underbelly/playground/01-executive-profile.jpg",
      "https://s3.amazonaws.com/underbelly/playground/02-brands-page.jpg",
      "https://s3.amazonaws.com/underbelly/playground/03-brand-page.jpg",
      "https://s3.amazonaws.com/underbelly/playground/04-home-scrolled.jpg",
      "https://s3.amazonaws.com/underbelly/playground/05-home.jpg"
    ],
    phoneImg: "https://s3.amazonaws.com/underbelly/playground/phone.png"
  },
  squarespace: {
    logo: require("../../../../../../../images/work/sizzling-platter/design-dev/squarespace.png"),
    laptop: require("../../../../../../../images/work/sizzling-platter/design-dev/laptop.png")
  },
  lifestyle : require("../../../../../../../images/work/fluid/lifestyle/01.jpg"),
  seeMore: {
    one   : require("../../../../../../../images/work/see-more/hive.jpg"),
    two   : require("../../../../../../../images/work/see-more/just-family.jpg"),
    three : require("../../../../../../../images/work/see-more/nsac.jpg"),
    four  : require("../../../../../../../images/work/see-more/rent-tree.jpg")
  },
}

let icons = [
{ name: "js0"          , svg: require("../../../../../../../images/work/sizzling-platter/squarespace/code-components-01.svg") },
{ name: "close0-red"   , svg: require("../../../../../../../images/work/sizzling-platter/squarespace/code-components-02.svg") },
{ name: "close1-red"   , svg: require("../../../../../../../images/work/sizzling-platter/squarespace/code-components-02.svg") },
{ name: "react0"       , svg: require("../../../../../../../images/work/sizzling-platter/squarespace/code-components-03.svg") },
{ name: "paren0"       , svg: require("../../../../../../../images/work/sizzling-platter/squarespace/code-components-04.svg") },
{ name: "semi0-red"    , svg: require("../../../../../../../images/work/sizzling-platter/squarespace/code-components-05.svg") },
{ name: "leftcurl-red" , svg: require("../../../../../../../images/work/sizzling-platter/squarespace/code-components-06.svg") },
{ name: "head"         , svg: require("../../../../../../../images/work/sizzling-platter/squarespace/code-components-07.svg") },
{ name: "js1"          , svg: require("../../../../../../../images/work/sizzling-platter/squarespace/code-components-08.svg") },
{ name: "divclose-red" , svg: require("../../../../../../../images/work/sizzling-platter/squarespace/code-components-09.svg") },
{ name: "semi1-red"    , svg: require("../../../../../../../images/work/sizzling-platter/squarespace/code-components-10.svg") },
{ name: "function"     , svg: require("../../../../../../../images/work/sizzling-platter/squarespace/code-components-11.svg") },
{ name: "semi2"        , svg: require("../../../../../../../images/work/sizzling-platter/squarespace/code-components-12.svg") },
{ name: "div"          , svg: require("../../../../../../../images/work/sizzling-platter/squarespace/code-components-13.svg") },
{ name: "rightcurl-red", svg: require("../../../../../../../images/work/sizzling-platter/squarespace/code-components-14.svg") },
{ name: "paren1"       , svg: require("../../../../../../../images/work/sizzling-platter/squarespace/code-components-15.svg") },
{ name: "semi3"        , svg: require("../../../../../../../images/work/sizzling-platter/squarespace/code-components-16.svg") },
{ name: "react1"       , svg: require("../../../../../../../images/work/sizzling-platter/squarespace/code-components-17.svg") },
{ name: "js2"          , svg: require("../../../../../../../images/work/sizzling-platter/squarespace/code-components-18.svg") }
]

export { img, icons };
