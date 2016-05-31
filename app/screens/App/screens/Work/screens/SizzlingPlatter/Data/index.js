// data
// * separate image concerns out of the component *
//   lets store an img object that the whole component can access

let requireSplatFile = function(file) {
  return require(`../../../../../../../images/work/sizzling-platter/${file}`);
}

let images = {
  hero: {
    bg   : requireSplatFile("hero/hero.jpg"),
    one  : requireSplatFile("hero/01.jpg"),
    two  : requireSplatFile("hero/02.jpg"),
    three: requireSplatFile("hero/03.jpg"),
    logo : requireSplatFile("hero/splat-logo-02.svg")
  },
  patterns: {
    peppers   : requireSplatFile("patterns/peppers.png"),
    pepperonis: requireSplatFile("patterns/pepperonis.png"),
    sprinkles : requireSplatFile("patterns/sprinkles.png")
  },
  ingredients: [
    requireSplatFile("ingredients/01.jpg"),
    requireSplatFile("ingredients/02.jpg"),
    requireSplatFile("ingredients/03.jpg"),
    requireSplatFile("ingredients/04.jpg")
  ],
  designDev : {
    bgLeft : requireSplatFile("design-dev/design-dev-bg-left.png"),
    bgRight: requireSplatFile("design-dev/design-dev-bg-right.png"),
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
    logo  : requireSplatFile("design-dev/squarespace.png"),
    laptop: requireSplatFile("design-dev/laptop.png")
  },
  seeMore: {
    one   : require("../../../../../../../images/work/see-more/hive.jpg"),
    two   : require("../../../../../../../images/work/see-more/just-family.jpg"),
    three : require("../../../../../../../images/work/see-more/nsac.jpg"),
    four  : require("../../../../../../../images/work/see-more/rent-tree.jpg")
  }
}

let icons = [
  { name: "js0"          , svg: requireSplatFile("squarespace/01.svg") },
  { name: "close0-red"   , svg: requireSplatFile("squarespace/02.svg") },
  { name: "close1-red"   , svg: requireSplatFile("squarespace/02.svg") },
  { name: "react0"       , svg: requireSplatFile("squarespace/03.svg") },
  { name: "paren0"       , svg: requireSplatFile("squarespace/04.svg") },
  { name: "semi0-red"    , svg: requireSplatFile("squarespace/05.svg") },
  { name: "leftcurl-red" , svg: requireSplatFile("squarespace/06.svg") },
  { name: "head"         , svg: requireSplatFile("squarespace/07.svg") },
  { name: "js1"          , svg: requireSplatFile("squarespace/08.svg") },
  { name: "divclose-red" , svg: requireSplatFile("squarespace/09.svg") },
  { name: "semi1-red"    , svg: requireSplatFile("squarespace/10.svg") },
  { name: "function"     , svg: requireSplatFile("squarespace/11.svg") },
  { name: "semi2"        , svg: requireSplatFile("squarespace/12.svg") },
  { name: "div"          , svg: requireSplatFile("squarespace/13.svg") },
  { name: "rightcurl-red", svg: requireSplatFile("squarespace/14.svg") },
  { name: "paren1"       , svg: requireSplatFile("squarespace/15.svg") },
  { name: "semi3"        , svg: requireSplatFile("squarespace/16.svg") },
  { name: "react1"       , svg: requireSplatFile("squarespace/17.svg") },
  { name: "js2"          , svg: requireSplatFile("squarespace/18.svg") }
]

export { images, icons };
