var isClient = function() {
  return typeof window !== "undefined";
};

var HeadParams = function(title, description) {
	this.title = title || "Underbelly Creative";
	this.description = description || "Work Hark, Be Exceptional, and Stay Humble";
};

HeadParams.prototype.setTitle = function(title) {
	var headTitle = document.getElementsByTagName('title');
  this.title = title;

  if (isClient()) {
    headTitle.text(title);
  }
};

module.exports = HeadParams;

// HeadParams.prototype.setDescription = function(description) {
// 	var metas = document.getElementsByTagName('meta');

//   this.description = description;

//   if (isClient()) {
//     for (var i = 0; i <= metas.length; i++) {
//     	if (metas[i].getAttribute("name") == "description") {
//     		metas[i].getAttribute("content") = this.description;
//     	}
//     }
//   }
// };