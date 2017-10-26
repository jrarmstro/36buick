"use strict";

var img_path = "img/gallery/";
var thumb_path = img_path + "/thumbs/";
var img_types = /\.(jpe?g|png|gif)$/;

var $gallery_container = $("#gallery");

$.ajax({
	url: img_path,
	success: function success(data) {
		$(data).find("a").attr("href", function (i, val) {
			if (val.match(img_types)) {
				$gallery_container.append("\n\t\t\t\t\t<div class=\"masonry-grid-item col-sm-12 col-md-6 col-lg-4 col-xl-3\">\n\t\t\t\t\t\t<a href=\"" + img_path + val + "\" target=\"_blank\">\n\t\t\t\t\t\t\t<img src=\"" + thumb_path + val + "\"\n\t\t\t\t\t\t\t     class=\"thumbnail\"\n\t\t\t\t\t\t\t\t onerror=\"if (this.src != '" + img_path + val + "') this.src='" + img_path + val + "';\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t");
			}

			$gallery_container.imagesLoaded(function () {
				$gallery_container.masonry({
					itemSelector: '.masonry-grid-item',
					columnWidth: '.masonry-grid-sizer',
					isAnimated: true,
					transitionDuration: '0.25s'
				});
			});
		});
	},
	error: function error(jqXHR, exception) {
		console.log(exception, jqXHR);
	}
});

//# sourceMappingURL=gallery.js.map