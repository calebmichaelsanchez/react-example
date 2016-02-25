let helpers = {
	scroll: window.requestAnimationFrame ||
					window.webkitRequestAnimationFrame ||
					window.mozRequestAnimationFrame ||
					window.msRequestAnimationFrame ||
					window.oRequestAnimationFrame,
  lastPosition: -1,
	transformThreeD: function(e, x, y, z) {
		e.style.webkitTransform = "translate3d(" + x + "px, " + y + "px, " + z + "px)";
		   e.style.MozTransform = "translate3d(" + x + "px, " + y + "px, " + z + "px)";
		     e.style.OTransform = "translate3d(" + x + "px, " + y + "px, " + z + "px)";
		  		e.style.transform = "translate3d(" + x + "px, " + y + "px, " + z + "px)";
	},
	loop: function(e) {
		console.log("loop");
		let top = window.pageYOffset;
		let scrollVal = Math.max(window.pageYOffset, 0);
	  let offset = (scrollVal * 0.15);

	  if (helpers.lastPosition == top) {
	  	helpers.scroll.call(window, helpers.loop);
	  	return false;
	  } else helpers.lastPosition = top;

	  let parallaxLayer = document.getElementById('home-hero');
	  helpers.transformThreeD(parallaxLayer, 0, offset, 0);

	  helpers.scroll.call(window, helpers.loop)
	},
	parallax: function(options) {
		let el = document.getElementById('parallax-ipad-item');
		let windowHeight = window.offsetHeight;
		let scrollTop = window.pageYOffset;
		let boundingClient = el.getBoundingClientRect();
		let offset = boundingClient.top + document.body.scrollTop;
		let height = el.offsetHeight;
		let settings = { speed: 0.35 };
		if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) { return; }
		let yPos = (0 - scrollTop) * settings.speed;
		yPos = +yPos.toFixed(2);
		el.style.transform = "translate3d( -50%, " + yPos + "px, 0)";
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
