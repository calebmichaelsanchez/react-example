let helpers = {
	transformThreeD: function(e, x, y, z) {
		e.style.webkitTransform = "translate3d(" + x + "px, " + y + "px, " + z + "px)";
		   e.style.MozTransform = "translate3d(" + x + "px, " + y + "px, " + z + "px)";
		     e.style.OTransform = "translate3d(" + x + "px, " + y + "px, " + z + "px)";
		  		e.style.transform = "translate3d(" + x + "px, " + y + "px, " + z + "px)";
	},
	scrollHandler: function(e) {
		let scrollVal = Math.max(window.pageYOffset, 0);
	  let offset = (scrollVal * 0.5);

	  let parallaxLayer = document.getElementById('home-hero');

	  helpers.transformThreeD(parallaxLayer, 0, offset, 0);
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
	requestAF: function() {
		window.requestAnimationFrame(helpers.scrollHandler);
	}
}

export default helpers;