let helpers = {
  'transformThreeD': function (e, x, xUnit, y, yUnit, z, zUnit) {
    e.style.webkitTransform = 'translate3d(' + x + xUnit + ', ' + y + yUnit + ', ' + z + zUnit + ')';
    e.style.MozTransform    = 'translate3d(' + x + xUnit + ', ' + y + yUnit + ', ' + z + zUnit + ')';
    e.style.OTransform      = 'translate3d(' + x + xUnit + ', ' + y + yUnit + ', ' + z + zUnit + ')';
    e.style.transform       = 'translate3d(' + x + xUnit + ', ' + y + yUnit + ', ' + z + zUnit + ')';
  },
  'transformRotate': function (e, value) {
    e.style.webkitTransform = 'rotate(' + value + 'deg) translateZ(0)';
    e.style.MozTransform    = 'rotate(' + value + 'deg) translateZ(0)';
    e.style.OTransform      = 'rotate(' + value + 'deg) translateZ(0)';
    e.style.transform       = 'rotate(' + value + 'deg) translateZ(0)';
  },
  'transformOpacity': function (e, value) {
    e.style.opacity = value;
  },
  'toDollars': function (x) {
    if (x === 0) {
      return '0.00';
    }
    let price = x.toString();
    let dollars = price.slice(0, price.length - 2);
    let cents = price.slice(price.length - 2);
    return `${dollars}.${cents}`;
  },
  'isInViewport': function (elem, offset) {
    let distance = elem.getBoundingClientRect();
    return (
      distance.top >= 0 && distance.top <= window.innerHeight - offset || document.documentElement.clientHeight - offset
    );
  },
  'position': function (base, range, relativeY, offset) {
    let returnVal = base + helpers.limit(0, 1, relativeY - offset) * range;
    return returnVal;
  },
  'limit': function (min, max, value) {
    return Math.max(min, Math.min(max, value));
  },
  'prefix': function (obj, prop, value) {
    let prefs = ['webkit', 'Moz', 'O', 'ms'];
    for (let pref in prefs) {
      if ({}.hasOwnProperty.call(prefs, pref)) {
        obj[prefs[pref] + prop] = value;
      }
    }
  }
};

export default helpers;
