"use strict";

var img_path = "img/gallery/";
var thumb_path = img_path + "/thumbs/";
var img_types = /\.(jpe?g|png|gif)$/;

$.ajax({
	url: img_path,
	success: function success(data) {
		$(data).find("a").attr("href", function (i, val) {
			if (val.match(img_types)) {
				$("#gallery").append("\n\t\t\t\t\t<div class=\"thumbnail col-sm-12 col-md-6 col-lg-4 col-xl-3\">\n\t\t\t\t\t\t<a href=\"" + img_path + val + "\" class=\"thumbnail\" target=\"_blank\">\n\t\t\t\t\t\t\t<img src=\"" + thumb_path + val + "\"\n\t\t\t\t\t\t\t     onerror=\"if (this.src != '" + img_path + val + "') this.src='" + img_path + val + "';\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t");
			}
		});
	},
	error: function error(jqXHR, exception) {
		console.log(exception, jqXHR);
	}
});

//# sourceMappingURL=gallery.js.map