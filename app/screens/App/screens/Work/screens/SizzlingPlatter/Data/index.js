// data
// * separate image concerns out of the component *
//   lets store an img object that the whole component can access

let images = {
  hero: {
    bg   : "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/hero/hero.jpg",
    one  : "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/hero/01.jpg",
    two  : "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/hero/02.jpg",
    three: "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/hero/03.jpg",
    logo : "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/hero/logo.svg"
  },
  patterns: {
    peppers   : "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/patterns/peppers.png",
    pepperonis: "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/patterns/pepperonis.png",
    sprinkles : "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/patterns/sprinkles.png"
  },
  ingredients: [
    "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/ingredients/01.jpg",
    "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/ingredients/02.jpg",
    "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/ingredients/03.jpg",
    "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/ingredients/04.jpg"
  ],
  designDev : {
    bgLeft : "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/design-dev/design-dev-bg-left.png",
    bgRight: "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/design-dev/design-dev-bg-right.png",
    backgroundImagesArray: [
      "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/slider/background/01.jpg",
      "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/slider/background/02.jpg",
      "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/slider/background/03.jpg",
      "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/slider/background/04.jpg",
      "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/slider/background/05.jpg"
    ],
    screenImagesArray: [
      "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/slider/screen/01.jpg",
      "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/slider/screen/02.jpg",
      "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/slider/screen/03.jpg",
      "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/slider/screen/04.jpg",
      "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/slider/screen/05.jpg"
    ],
    phoneImg: "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/slider/phone.png"
  },
  squarespace: {
    logo  : "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/design-dev/squarespace.png",
    laptop: "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/design-dev/laptop.png"
  },
  seeMore: {
    one:   "https://s3.amazonaws.com/underbelly/website/work/see-more/hive.jpg",
    two:   "https://s3.amazonaws.com/underbelly/website/work/see-more/just-family.jpg",
    three: "https://s3.amazonaws.com/underbelly/website/work/see-more/nsac.jpg",
    four:  "https://s3.amazonaws.com/underbelly/website/work/see-more/rent-tree.jpg"
  }
}

let icons = [
  { name: "js0"          , svg: "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/squarespace/01.svg" },
  { name: "close0-red"   , svg: "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/squarespace/02.svg" },
  { name: "close1-red"   , svg: "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/squarespace/02.svg" },
  { name: "react0"       , svg: "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/squarespace/03.svg" },
  { name: "paren0"       , svg: "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/squarespace/04.svg" },
  { name: "semi0-red"    , svg: "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/squarespace/05.svg" },
  { name: "leftcurl-red" , svg: "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/squarespace/06.svg" },
  { name: "head"         , svg: "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/squarespace/07.svg" },
  { name: "js1"          , svg: "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/squarespace/08.svg" },
  { name: "divclose-red" , svg: "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/squarespace/09.svg" },
  { name: "semi1-red"    , svg: "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/squarespace/10.svg" },
  { name: "function"     , svg: "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/squarespace/11.svg" },
  { name: "semi2"        , svg: "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/squarespace/12.svg" },
  { name: "div"          , svg: "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/squarespace/13.svg" },
  { name: "rightcurl-red", svg: "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/squarespace/14.svg" },
  { name: "paren1"       , svg: "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/squarespace/15.svg" },
  { name: "semi3"        , svg: "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/squarespace/16.svg" },
  { name: "react1"       , svg: "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/squarespace/17.svg" },
  { name: "js2"          , svg: "https://s3.amazonaws.com/underbelly/website/work/sizzling-platter/squarespace/18.svg" }
]

export { images, icons };
