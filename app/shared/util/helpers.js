let helpers = {
	transformThreeD: function(e, x, y, z) {
		e.style.webkitTransform = "translate3d(" + x + "px, " + y + "px, " + z + "px)";
		   e.style.MozTransform = "translate3d(" + x + "px, " + y + "px, " + z + "px)";
		     e.style.OTransform = "translate3d(" + x + "px, " + y + "px, " + z + "px)";
		  		e.style.transform = "translate3d(" + x + "px, " + y + "px, " + z + "px)";
	},
	toDollars: function(x) {
    if (x === 0) { return '0.00' }
    let price = x.toString();
    let dollars = price.slice(0, price.length - 2);
    let cents = price.slice(price.length - 2);
    return `${dollars}.${cents}`
  }
}

export default helpers;
