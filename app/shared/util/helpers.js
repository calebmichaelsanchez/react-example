let helpers = {
	transformThreeD: function(e, x, xUnit, y, yUnit, z, zUnit) {
		e.style.webkitTransform = "translate3d(" + x + xUnit + ", " + y + yUnit + ", " + z + zUnit + ")";
		   e.style.MozTransform = "translate3d(" + x + xUnit + ", " + y + yUnit + ", " + z + zUnit + ")";
		     e.style.OTransform = "translate3d(" + x + xUnit + ", " + y + yUnit + ", " + z + zUnit + ")";
		  		e.style.transform = "translate3d(" + x + xUnit + ", " + y + yUnit + ", " + z + zUnit + ")";
	},
  transformRotate: function(e, value) {
    e.style.webkitTransform = "rotate(" + value + "deg)";
       e.style.MozTransform = "rotate(" + value + "deg)";
         e.style.OTransform = "rotate(" + value + "deg)";
          e.style.transform = "rotate(" + value + "deg)";
  },
	toDollars: function(x) {
    if (x === 0) { return '0.00' }
    let price = x.toString();
    let dollars = price.slice(0, price.length - 2);
    let cents = price.slice(price.length - 2);
    return `${dollars}.${cents}`
  },
  isInViewport: function(elem, offset) {
    let distance = elem.getBoundingClientRect();
    return (
      (distance.top >= 0 && distance.top <= ((window.innerHeight - offset) || (document.documentElement.clientHeight - offset)))
    );
  },
  position: function(base, range, relativeY, offset) {
    let returnVal = base + helpers.limit(0, 1, relativeY - offset) * range;
    return returnVal;
  },
  limit: function(min, max, value) {
    return Math.max(min, Math.min(max, value));
  },
  easeOutCubic: function(currentIteration, startValue, changeInValue, totalIterations) {
      return changeInValue * (Math.pow(currentIteration / totalIterations - 1, 3) + 1) + startValue;
  },
  // Underscores Throttle
  throttle: function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : Date.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = Date.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    }
  }
}

export default helpers;
